# DEEPu. - Data Scientist & AI Engineer Portfolio Website

A complete, modern, and highly-aesthetic responsive personal portfolio website designed for **Deepu**, an aspiring Data Scientist & AI Engineer. Built strictly using Vanilla HTML5, CSS3 (modular stylesheets), and modern ES6 Vanilla JavaScript.

## 🎨 Color Palette & Aesthetic System

The design coordinates standard micro-interactions, soft shadows, rounded borders, and glassmorphism elements matching the exact visual requirements:
- **Ghost White Background (`#F7F7FF`):** Dominates the base container grids.
- **Persian Indigo (`#27187E`):** Coordinates primary accents, action triggers, footer background, and active navigation nodes.
- **Card Styling:** White card layouts (`#FFFFFF`) overlaying modern drop shadows and glowing borders.

---

## 📂 Project Structure

```
portfolio/
├── index.html                  # Core landing page layout
├── README.md                   # Documentation guide
├── css/
│   ├── style.css               # Global resets, variables, container alignments
│   ├── navbar.css              # Glassmorphic header & responsive menu
│   ├── hero.css                # Split landing layout & decorative elements
│   ├── about.css               # Personal details cards & passion indicators
│   ├── skills.css              # Grid cards highlighting tech stacks
│   ├── projects.css            # Hover card overlays & project badges
│   ├── certifications.css      # Dual-row slider with horizontal offsets
│   ├── timeline.css            # Alternating vertical chronology path
│   ├── contact.css             # Text fields & dynamic success statuses
│   ├── footer.css              # Premium dark Indigo base footer
│   └── responsive.css          # Device width media queries overrides
├── js/
│   ├── main.js                 # Shared initializations & date updates
│   ├── navbar.js               # Toggle menu triggers & observer highlights
│   ├── typing.js               # Cycling character typing animation
│   ├── certificates-slider.js  # Desktop drag-scroll & navigation actions
│   ├── web3forms.js            # Inputs validations & manuals guide stubs
│   └── animations.js           # Scroll triggers & mouse parallaxes
└── assets/
    ├── images/
    │   └── profile.png         # AI generated professional headshot portrait
    ├── certificates/           # Vector SVGs / placeholders
    └── resume/
        └── resume-placeholder.pdf # Curricula Vitae file placeholder
```

---

## 🚀 Key Interactive Highlights

1. **Typing Subtitle Carousel:** Cycles between titles (*Data Scientist*, *AI Engineer*, *Machine Learning Engineer*) with deletion pauses.
2. **Dual-Row Certifications Showcase:** Displays certificates in two horizontal rows with independent navigation buttons, desktop drag-scroll capabilities, active page indicators, and a highlighted active IBM certificate card.
3. **Responsive Drawers:** Modern hamburger buttons slide-in mobile drawers gracefully.
4. **Scroll Reveal Observers:** Intersection Observers trigger subtle entry animations when sections scroll into view.
5. **Mouse Parallax Badges:** Floating stats elements track mouse movements with varied depths.

---

## 📬 Manual Web3Forms Integration Guide

Deepu, to link your live email transmission with Web3Forms, follow these simple steps:

1. Obtain a free access key at [Web3Forms](https://web3forms.com/).
2. Open `js/web3forms.js` in a text editor.
3. Navigate to **Line 37** (the commented section).
4. Uncomment the fetch structure and swap `"YOUR_WEB3FORMS_ACCESS_KEY_HERE"` with your actual key.
5. Remove the mock `setTimeout` simulation logic underneath, and save!

---

## 💻 Local Execution

Since this is built with clean vanilla files, there are no compilers needed! Simply open `index.html` in any browser, or use a local dev server (e.g., Live Server extension in VS Code) to enjoy the full smooth transitions and backdrop filters!
