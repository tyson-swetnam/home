# CV sources

LaTeX sources for the CV PDFs linked from [tysonswetnam.com/cv](https://tysonswetnam.com/cv/).

| File | Output | Notes |
|------|--------|-------|
| `Swetnam_CV_2026.tex` | `docs/assets/2026_09_22_Swetnam_CV.pdf` | Full academic CV |
| `Swetnam_Resume_Industry_2026.tex` | `docs/assets/2026_09_22_Swetnam_resume.pdf` | Two-page resume |

Both are single-file pdfLaTeX documents (Computer Modern, no custom class) and build on Overleaf or locally with `latexmk -pdf <file>.tex`. After rebuilding, copy the PDF into `docs/assets/` and update the links in `docs/cv.md`.
