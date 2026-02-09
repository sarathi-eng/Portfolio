# 🚀 Sarathi S — 3D Portfolio Website

A stunning, modern 3D portfolio website built with **Next.js 14**, **Tailwind CSS**, **ShadCN UI**, **Framer Motion**, and advanced UI/UX features.

## ✨ Features

- **3D Visual Effects** — Floating gradient orbs, perspective grid, parallax particles
- **Glassmorphism Design** — Frosted glass cards with backdrop blur
- **Custom Cursor Glow** — Radial gradient follows cursor movement
- **Typewriter Animation** — Rotating role titles with typing effect
- **Scroll Animations** — Framer Motion reveal-on-scroll for every section
- **3D Card Tilt** — Hover perspective transform on cards
- **Animated Filter Tabs** — Smooth layout animation for project filtering
- **Tech Stack Marquee** — Infinite scrolling technology badges
- **Scroll Progress Bar** — Gradient progress indicator at the top
- **Noise Texture Overlay** — Subtle grain for depth perception
- **Active Nav Tracking** — Intersection Observer highlighting
- **Loading Screen** — Animated progress loader with branding
- **Responsive Design** — Mobile-first with smooth mobile menu
- **Premium Typography** — Inter + Space Grotesk + JetBrains Mono
- **Dark Theme** — Purple/blue gradient accent palette

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| UI Components | ShadCN UI (Radix Primitives) |
| Animations | Framer Motion |
| 3D Effects | Spline 3D ready + CSS 3D transforms |
| Typography | Google Fonts (Inter, Space Grotesk, JetBrains Mono) |
| Icons | Lucide React |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, glassmorphism, animations
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page orchestrator
├── components/
│   ├── ui/                  # ShadCN UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── About.tsx            # About section with 3D cards
│   ├── Contact.tsx          # Contact form with glowing inputs
│   ├── CursorGlow.tsx       # Custom cursor follower
│   ├── Footer.tsx           # Animated footer
│   ├── Hero.tsx             # 3D Hero with typewriter
│   ├── Loader.tsx           # Loading screen
│   ├── Navbar.tsx           # Sticky nav with scroll tracking
│   ├── Projects.tsx         # Filterable project grid
│   └── Skills.tsx           # Skill categories + marquee
└── lib/
    ├── data.ts              # All portfolio data
    ├── hooks.ts             # Custom React hooks
    └── utils.ts             # Utility functions
```

## 🎨 Customization

### Update Personal Info

Edit `src/lib/data.ts` to change:

- Personal info, bio, avatar
- Projects list and descriptions
- Skill categories
- Experience entries

### Integrate Spline 3D

The project includes `@splinetool/react-spline`. To add a Spline 3D scene:

1. Create your scene at [spline.design](https://spline.design)
2. Replace the gradient orbs in `Hero.tsx` with:

```tsx
import Spline from '@splinetool/react-spline';

<Spline scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
```

### Change Color Theme

Edit CSS variables in `src/app/globals.css` under `:root`.

## 📄 License

MIT License — feel free to use this as your own portfolio!
