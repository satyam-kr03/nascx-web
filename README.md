# NASCX Website

Professional research project website for NASCX: Network-Aware Semantic Communication for XR in 6G Networks.

## Overview

This is a Next.js-based website showcasing the NASCX research framework with comprehensive documentation, research details, team information, and project resources.

## Features

- **Professional Design**: Modern, clean UI with dark theme optimized for research projects
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Multiple Pages**:
  - Home: Project overview and key features
  - Research: Detailed research methodology and objectives
  - Documentation: Installation guides, setup instructions, and API reference
  - Team: Meet the researchers and contributors
  - 404: Custom error page

- **Technology Stack**:
  - Next.js 14.0+ for fast static/dynamic rendering
  - React 18.2+ for interactive components
  - Modern CSS with CSS variables for theming
  - SEO optimized with proper meta tags

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
cd nascx-website
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
nascx-website/
├── pages/
│   ├── _app.js              # Main app wrapper
│   ├── index.js             # Home page
│   ├── research.js          # Research page
│   ├── documentation.js     # Documentation page
│   ├── team.js              # Team page
│   └── 404.js               # Custom 404 page
├── components/
│   ├── Header.js            # Navigation header
│   └── Footer.js            # Footer component
├── styles/
│   └── globals.css          # Global styles and theme
├── public/                  # Static assets
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
└── README.md                # This file
```

## Pages

### Home (/)
- Project overview
- QoS requirements table
- Current limitations
- Solution features
- Technology stack
- Call-to-action buttons

### Research (/research)
- Research methodology
- Four-phase approach (Semantic Estimation, Compression, Scheduling, Validation)
- Technical approaches
- Expected outcomes
- Publications and future work

### Documentation (/documentation)
- Quick start guide
- Prerequisites and installation
- Project structure
- Running simulations
- Configuration options
- Architecture overview
- API reference
- Troubleshooting guide
- External resources

### Team (/team)
- Research team members
- Collaboration areas
- Team expertise
- Vision and mission
- Core values
- Contributing guidelines

## Design System

### Color Palette
- Primary Background: `#0f1724`
- Secondary Background: `#1a2332`
- Accent Primary: `#5b7cfa`
- Accent Secondary: `#748ffc`
- Text Primary: `#e6eef8`
- Text Secondary: `#a8b5c4`

### Components
- **Cards**: Hover effects with gradient borders
- **Buttons**: Primary (filled) and secondary (outlined) styles
- **Grid Layouts**: Responsive grid system (cols-1, cols-2, cols-3)
- **Feature Cards**: Icon + title + description layout
- **Tables**: Research requirements and comparison tables

## Customization

### Updating Content

Edit the corresponding `.js` file in the `pages/` directory to update page content.

### Changing Theme Colors

Edit the CSS variables in `styles/globals.css`:

```css
:root {
  --bg-primary: #0f1724;
  --accent-primary: #5b7cfa;
  /* ... */
}
```

### Adding New Pages

1. Create a new file in `pages/` directory
2. Import Header and Footer components
3. Add to navigation in `components/Header.js`

## Performance

- Static generation for all pages
- Optimized CSS and JavaScript bundles
- Responsive images support
- Fast page load times

## SEO

All pages include:
- Proper title tags
- Meta descriptions
- Semantic HTML structure

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy with Vercel
vercel
```

### Other Platforms

```bash
npm run build
# Deploy the .next folder or configure for your platform
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## License

This website is part of the NASCX research project. See the main project LICENSE for details.

## Contributing

To contribute improvements to the website:

1. Create a branch for your changes
2. Make updates to pages or styles
3. Test locally with `npm run dev`
4. Submit a pull request

## Support

For issues or questions:
- Check the documentation pages
- Review the GitHub repository
- Open an issue on GitHub

---

Built with Next.js and React for the NASCX research framework.
