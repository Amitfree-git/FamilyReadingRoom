#!/usr/bin/env python3
"""Validate artwork dimensions and approval completeness; manual art review is still necessary."""
import json
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Run: pip install Pillow")

root = Path(__file__).resolve().parents[1]
data = json.loads((root / "art-direction/lessons.json").read_text("utf8"))
assert len(data["lessons"]) == 30, "Need 30 course art plans"
expected = {"desktop": (2560, 1120), "mobile": (1200, 900), "panel": (1600, 1000)}
approved = 0
for lesson in data["lessons"]:
    paths = [(lesson["images"]["desktop"], expected["desktop"]),
             (lesson["images"]["mobile"], expected["mobile"])]
    paths += [(p, expected["panel"]) for p in lesson["images"]["panels"]]
    assert len(lesson["images"]["panels"]) == len(lesson["storyFrames"]), lesson["id"]
    if lesson["status"] not in ("planned", "in_review", "approved"):
        raise ValueError("Unknown approval status for " + lesson["id"])
    if lesson["status"] != "approved":
        continue
    for path, size in paths:
        f = root / path
        if not f.is_file():
            raise FileNotFoundError("Approved asset missing: " + str(f))
        with Image.open(f) as im:
            assert im.size == size, (f, im.size, size)
            assert im.mode in ("RGB", "RGBA"), (f, im.mode)
            im.verify()
        assert f.stat().st_size >= 40_000, "File suspiciously small: " + str(f)
        approved += 1
print("PASS: 30 planned courses; approved art files:", approved)
