# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run Next.js lint check
```

## Project Architecture

This is a Next.js 14 TypeScript application for Free Pupil, a non-profit organization that helps underprivileged children.

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Relume UI components
- **UI Components**: Relume UI framework (@relume_io/relume-ui)
- **Animations**: Framer Motion and GSAP
- **Icons**: Lucide React

### Path Aliases
- `@/*` → `./src/*` (configured in tsconfig.json)

### Component Architecture
- Components are organized in `/src/components/`
- HomePage components are in their own subdirectory
- All components are exported through barrel exports (index.ts files)
- Uses Relume UI component library for rapid development

### Styling
- Uses Tailwind CSS with custom configuration
- Primary color: #D84543
- Font: Familjen Grotesk (Google Font)
- Dark mode enabled via class strategy

### Key Files
- `/src/app/page.tsx` - Main homepage component
- `/src/app/layout.tsx` - Root layout with metadata and font configuration
- `/src/components/` - All reusable components
- `/public/svgs/` - SVG assets
- `/public/images/home/` - Homepage images

### Deployment
- Vercel deployment configured with rewrites for SPA behavior