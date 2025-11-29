# Static Export

This directory contains the static HTML, CSS, and JS version of the Hodoki Digital Canvas project.

## How to Deploy to GitHub Pages

1.  Upload the contents of this folder (`index.html`, `script.js`, and `assets` folder) to your GitHub repository.
    *   You can push this to the `main` branch if you want this to be your main site.
    *   Or you can push it to a `gh-pages` branch.
2.  Go to your GitHub Repository Settings -> Pages.
3.  Select the source branch (e.g., `main` or `gh-pages`) and folder (root `/`).
4.  Save. Your site will be live shortly.

## Editing

*   **HTML**: Edit `index.html` to change the content and structure.
*   **Styles**: The styles are in `assets/index-....css`. This is a compiled file from Tailwind. To make significant style changes, it's recommended to use the original source code and rebuild, but for small tweaks you can add a `<style>` block in `index.html` or a custom CSS file.
*   **Scripts**: Edit `script.js` for interactivity.
