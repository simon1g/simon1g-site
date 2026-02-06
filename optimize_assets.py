from pathlib import Path
from PIL import Image

SOURCE_DIR = Path("src/assets")
QUALITY = 80  # good web balance

SUPPORTED_EXTS = {".jpg", ".jpeg", ".png"}
EXCLUDED_DIRS = {"pixelart"}

def is_excluded(path: Path) -> bool:
    return any(part.lower() in EXCLUDED_DIRS for part in path.parts)

def optimize_image(path: Path):
    if is_excluded(path):
        return

    if path.suffix.lower() not in SUPPORTED_EXTS:
        return

    output_path = path.with_suffix(".webp")
    if output_path.exists():
        return

    try:
        with Image.open(path) as img:
            img = img.convert("RGB")
            img.save(
                output_path,
                "WEBP",
                quality=QUALITY,
                method=6,
                optimize=True
            )

        path.unlink()
        print(f"✔ {path} → {output_path} (original removed)")

    except Exception as e:
        print(f"✖ Failed: {path} ({e})")

def main():
    for file in SOURCE_DIR.rglob("*"):
        optimize_image(file)

if __name__ == "__main__":
    main()
