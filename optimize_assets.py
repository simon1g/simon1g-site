from pathlib import Path
from PIL import Image
try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

SOURCE_DIR = Path("src/assets")
MAX_DIMENSION = 1920
QUALITY = 75

SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic"}
EXCLUDED_DIRS = {"pixelart"}

def is_excluded(path: Path) -> bool:
    return any(part.lower() in EXCLUDED_DIRS for part in path.parts)

def optimize_image(path: Path):
    ext = path.suffix.lower()
    if ext not in SUPPORTED_EXTS:
        return

    is_pixelart = is_excluded(path)
    output_path = path.with_suffix(".webp")
    is_already_webp = (ext == ".webp")
    
    try:
        with Image.open(path) as img:
            orig_size = path.stat().st_size
            width, height = img.size
            
            # Skip if it's already a small enough webp
            if is_already_webp and width <= MAX_DIMENSION and height <= MAX_DIMENSION and orig_size < 500 * 1024:
                return

            if is_pixelart:
                # For pixel art, we want lossless WebP and NO resizing
                if is_already_webp: return # Don't re-optimize webp pixelart
                
                print(f"Applying lossless optimization for pixelart: {path.name}")
                img.save(
                    output_path,
                    "WEBP",
                    lossless=True,
                    optimize=True
                )
            else:
                # Resize if too large
                if width > MAX_DIMENSION or height > MAX_DIMENSION:
                    ratio = min(MAX_DIMENSION / width, MAX_DIMENSION / height)
                    new_size = (int(width * ratio), int(height * ratio))
                    img = img.resize(new_size, Image.Resampling.LANCZOS)
                    print(f"Resizing {path.name}: {width}x{height} -> {new_size[0]}x{new_size[1]}")

                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")
                    
                img.save(
                    output_path,
                    "WEBP",
                    quality=QUALITY,
                    method=6,
                    optimize=True
                )

        new_size = output_path.stat().st_size
        if not is_already_webp:
            path.unlink()
            print(f"✔ {path.name} → {output_path.name} ({orig_size//1024}KB -> {new_size//1024}KB)")
        else:
            if new_size < orig_size:
                print(f"✔ Re-optimized {path.name} ({orig_size//1024}KB -> {new_size//1024}KB)")

    except Exception as e:
        print(f"✖ Failed: {path} ({e})")



def main():
    for file in SOURCE_DIR.rglob("*"):
        optimize_image(file)

if __name__ == "__main__":
    main()
