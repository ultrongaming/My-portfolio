# Rudra Narayan Bishoyi — Portfolio Website

A single-page developer portfolio with a bold, "system console" theme.

## Structure
```
portfolio-project/
├── index.html      # Page markup
├── css/
│   └── style.css   # All styling
├── js/
│   └── script.js   # Scroll reveal, scrollspy nav, terminal animation
└── README.md
```

## How to use
- **View locally:** just open `index.html` in any browser — no build step needed.
- **Host it live (free options):**
  - **GitHub Pages:** push this folder to a GitHub repo, then enable Pages in repo Settings → Pages → deploy from the `main` branch.
  - **Netlify / Vercel:** drag and drop this folder into their dashboard, or connect the GitHub repo for auto-deploys.

## Editing content
- **Text/links:** edit `index.html` directly — bio, education, skills, projects, and contact links are plain HTML.
- **Colors/fonts/spacing:** edit `css/style.css`. Core colors are defined once at the top under `:root`.
- **Animations/behavior:** edit `js/script.js`.

## Fonts
Uses Google Fonts (Sora, Inter, JetBrains Mono) loaded via CDN in `index.html` — requires an internet connection to display correctly.
