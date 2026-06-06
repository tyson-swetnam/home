#!/usr/bin/env python3
"""Refresh Google Scholar metrics for the publications page.

Scrapes the public author profile and writes citations / h-index / i10-index
to docs/javascripts/scholar-metrics.json. Google Scholar has no official API
and may serve a CAPTCHA to automated requests; if the scrape fails to parse,
the existing JSON is left untouched (we never overwrite good data with junk).

Usage: python scripts/update_scholar_metrics.py
Exit 0 always (a failed scrape is non-fatal; the workflow just commits nothing).
"""

import datetime
import json
import os
import re
import sys
import urllib.request

SCHOLAR_USER = "nanIeAYAAAAJ"
URL = f"https://scholar.google.com/citations?user={SCHOLAR_USER}&hl=en"
OUT = os.path.join(os.path.dirname(__file__), "..", "docs", "javascripts", "scholar-metrics.json")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", "replace")


def parse(html):
    # The summary table (#gsc_rsb_st) renders six <td class="gsc_rsb_std"> cells:
    # Citations[All, Since], h-index[All, Since], i10-index[All, Since].
    # We want the "All" column -> indices 0, 2, 4.
    nums = [int(n.replace(",", "")) for n in re.findall(r'class="gsc_rsb_std">(\d[\d,]*)', html)]
    if len(nums) < 5 or nums[0] <= 0:
        raise ValueError(f"unexpected metrics table (parsed {nums!r})")
    return {"citations": nums[0], "hIndex": nums[2], "i10Index": nums[4]}


def main():
    try:
        metrics = parse(fetch(URL))
    except Exception as exc:  # blocked, CAPTCHA, layout change, network error
        print(f"::warning::Scholar scrape failed, keeping existing metrics: {exc}")
        return 0

    metrics["updated"] = datetime.date.today().isoformat()
    with open(OUT, "w") as fh:
        json.dump(metrics, fh, indent=2)
        fh.write("\n")
    print(f"Updated {OUT}: {metrics}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
