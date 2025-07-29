# Abhinav Surya - Portfolio

A modern, interactive portfolio website showcasing my skills, experience, and projects.

## 🚀 Live Demo

[Live Portfolio](https://your-portfolio-link.com) *(Coming Soon)*

## ✨ Features

- **Interactive 3D Robot Model** - Animated 3D model using Three.js
- **Smooth Animations** - GSAP-powered animations and transitions
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Dark theme with cyan accents
- **Project Showcase** - Carousel with infinite scroll
- **Skills Visualization** - Hexagonal skill tiles
- **Experience Timeline** - Interactive experience cards

## 🛠️ Tech Stack

- **Frontend:** React, Next.js, TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Animations:** GSAP, Framer Motion
- **3D Graphics:** Three.js, React Three Fiber
- **Carousel:** Swiper.js
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── 3DModels/       # 3D robot model
│   ├── Experience/      # Experience section
│   ├── Hero/           # Landing page
│   ├── Nav/            # Navigation
│   ├── Projects/       # Projects carousel
│   └── Skills/         # Skills hexagons
├── context/            # React context providers
├── Utills/             # Utilities and data
└── page-components/    # Page-level components
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhinavsurya1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

- **Projects:** Update `src/Utills/projectsData.tsx`
- **Experience:** Update `src/Utills/staticData.tsx`
- **Skills:** Modify `src/components/Skills/hexaSkills.tsx`
- **Styling:** Edit `src/app/globals.css`

## 📱 Responsive Design

- **Mobile:** Single column layout
- **Tablet:** Two-column grid
- **Desktop:** Three-column layout with 3D model

## 🔧 Environment Variables

No environment variables required for basic functionality.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Abhinav Surya**
