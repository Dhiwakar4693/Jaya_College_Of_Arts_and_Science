# Jaya College of Arts and Science Website

A modern college website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It includes animated page transitions, scroll-based reveal effects, interactive UI components, and a polished responsive design.

## Key Features

- Next.js App Router structure with page and layout components
- Framer Motion-powered scroll reveal, hover effects, and animated page elements
- Parallax layers for depth motion on hero and header sections
- Custom cursor and smooth-scroll UX for desktop
- Reusable UI components and section-based content layout
- Responsive design for mobile, tablet, and desktop

## Project Structure

- `src/app/` — top-level app pages and layout
- `src/components/` — reusable UI components and layout elements
- `src/sections/` — homepage sections and content blocks
- `src/data/` — site content, courses, departments, and configuration
- `public/` — static assets like images

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open `http://localhost:3000` to view the site locally.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm run start
```

## Technologies

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Notes

- The project uses a custom smooth-scrolling experience on desktop.
- Motion and parallax effects are implemented with reusable React components such as `RevealOnScroll` and `ParallaxLayer`.
- The default `README.md` was updated to document the project and setup instructions.
 
