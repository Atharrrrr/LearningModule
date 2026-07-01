#!/usr/bin/env python3
"""Lightweight chapter verifier. Usage: verify.py <path/to/part-file.html>"""
import sys, re, subprocess, tempfile, os

def check_tags(html, tag):
    return len(re.findall(rf"<{tag}[ >]", html)), len(re.findall(rf"</{tag}>", html))

def main():
    if len(sys.argv) < 2:
        print("Usage: verify.py <file.html>"); sys.exit(1)
    path = sys.argv[1]
    html = open(path, encoding="utf-8").read()
    problems = []

    for tag in ["div", "section", "svg", "script"]:
        o, c = check_tags(html, tag)
        if o != c:
            problems.append(f"Unbalanced <{tag}>: {o} open vs {c} close")

    if 'class="quiz"' not in html:
        problems.append("No quiz component found in this file")

    scripts = re.findall(r"<script>(.*?)</script>", html, re.S)
    if scripts:
        combined = "\n".join(scripts)
        with tempfile.NamedTemporaryFile(suffix=".js", delete=False, mode="w") as f:
            f.write(combined); tmp = f.name
        try:
            r = subprocess.run(["node", "--check", tmp], capture_output=True, text=True, timeout=10)
            if r.returncode != 0:
                problems.append(f"JS syntax error:\n{r.stderr}")
        except FileNotFoundError:
            problems.append("Warning: node not available, skipped JS syntax check")
        finally:
            os.unlink(tmp)

    try:
        from playwright.sync_api import sync_playwright
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            errs = []
            page.on("pageerror", lambda e: errs.append(str(e)))
            page.goto(f"file://{os.path.abspath(path)}")
            page.wait_for_timeout(800)
            if errs:
                problems.append(f"Console errors: {errs}")
            browser.close()
    except ImportError:
        pass  # structural checks above are the baseline if playwright isn't installed

    if problems:
        print("ISSUES FOUND:")
        for p in problems: print(f"  - {p}")
        sys.exit(1)
    print("PASS: structural checks clean")

if __name__ == "__main__":
    main()
