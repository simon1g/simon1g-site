from pathlib import Path
from PIL import Image
try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

SOURCE_DIR = Path("src/assets")
SIZES = [400, 800, 1200]
QUALITY = 75

SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic"}
EXCLUDED_DIRS = {"pixelart"}

def is_excluded(path: Path) -> bool:
    return any(part.lower() in EXCLUDED_DIRS for part in path.parts)

def save_variant(img, output_path, width, quality):
    orig_w, orig_h = img.size
    if width < orig_w:
        ratio = width / orig_w
        new_size = (width, int(orig_h * ratio))
        img_resized = img.resize(new_size, Image.Resampling.LANCZOS)
    else:
        img_resized = img
    
    img_resized.save(
        output_path,
        "WEBP",
        quality=quality,
        method=6,
        optimize=True
    )
    return output_path.stat().st_size

def optimize_image(path: Path):
    ext = path.suffix.lower()
    if ext not in SUPPORTED_EXTS:
        return
    
    # Skip already generated variants to avoid infinite recursion/re-processing
    if any(path.name.endswith(f"-{s}w.webp") for s in SIZES):
        return

    is_pixelart = is_excluded(path)
    is_already_webp = (ext == ".webp")
    
    try:
        with Image.open(path) as img:
            orig_size = path.stat().st_size
            width, height = img.size
            
            if is_pixelart:
                output_path = path.with_suffix(".webp")
                # For pixel art, we want lossless WebP and NO resizing
                if is_already_webp: return 
                
                print(f"Applying lossless optimization for pixelart: {path.name}")
                img.save(output_path, "WEBP", lossless=True, optimize=True)
                if not is_already_webp: path.unlink()
            else:
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")

                # Generate variants
                for size in SIZES:
                    variant_path = path.with_name(f"{path.stem}-{size}w.webp")
                    new_size = save_variant(img, variant_path, size, QUALITY)
                    print(f"  ✔ {variant_path.name} ({new_size//1024}KB)")
                
                # Also save the "original" but optimized at 1600px max if needed
                main_path = path.with_suffix(".webp")
                main_size = save_variant(img, main_path, 1600, QUALITY)
                print(f"✔ {path.name} → {main_path.name} ({orig_size//1024}KB -> {main_size//1024}KB)")
                
                if not is_already_webp:
                    path.unlink()

    except Exception as e:
        print(f"✖ Failed: {path} ({e})")

def main():
    # Process files. We collect them first to avoid issues with modifying dir during iteration
    files = [f for f in SOURCE_DIR.rglob("*") if f.is_file()]
    for file in files:
        optimize_image(file)

if __name__ == "__main__":
    main()
