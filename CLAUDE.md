# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the aiosoratech Portfolio Website - a personal portfolio showcasing web projects and games. The project uses a hybrid architecture:
- Main portfolio site: Static HTML with embedded CSS
- Treasure Hunt game: React application built with Vite
- Individual game pages: Standalone HTML files

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (for React app)
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Hybrid Structure
- **Static Pages**: `index.html` (main portfolio), `contact/index.html`, and individual game directories (`/clockgame`, `/shogi`, etc.)
- **React Application**: Located in `/src`, specifically for the treasure hunt game
- **Styling**: Mix of inline CSS (static pages) and Tailwind CSS (React components)

### Key Technologies
- React 19.1.0 with Vite 6.3.5 (SWC for fast compilation)
- Tailwind CSS 3.4.3 for utility-first styling
- ESLint 9.25.0 for code quality
- Modern CSS features: Custom properties, Grid, Flexbox, glassmorphism effects

### Design System
The project follows a modern design system detailed in `要件定義書.md`:
- **Primary Color**: `#2563eb` (modern blue)
- **Font**: Inter from Google Fonts
- **Border Radius**: `0.75rem` (unified)
- **Transitions**: `cubic-bezier(0.4, 0, 0.2, 1)` with 200ms duration
- **Responsive Breakpoint**: 768px for mobile

## Important Files

- **Main Portfolio**: `index.html` - The landing page with portfolio grid
- **Contact Form**: `contact/index.html` - Contact page with form
- **React Game**: `src/TreasureHuntGame.jsx` - Interactive treasure hunt game
- **Requirements**: `要件定義書.md` - Detailed UX/UI requirements in Japanese

## Development Guidelines

### When modifying the static HTML pages:
- Maintain the existing inline CSS style
- Follow the established design system (colors, shadows, transitions)
- Ensure responsive design works on mobile (768px breakpoint)
- Keep glassmorphism effects and gradient backgrounds consistent

### When working with the React application:
- Use functional components with hooks
- Follow Tailwind CSS utility classes for styling
- Maintain the existing component structure
- Run `npm run lint` before committing changes

### Testing
Currently, no test framework is configured. Manual testing should include:
- Responsive design across devices
- Interactive elements (hover effects, transitions)
- Form functionality
- Game mechanics in the treasure hunt

## Notes
- The project follows Japanese development practices with documentation in Japanese
- Performance optimizations include hardware-accelerated animations and blur effects
- Accessibility features include appropriate aria-labels and keyboard navigation support