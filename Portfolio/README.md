# Portfolio - Landing Page

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Getting Started

The development server is running! Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css       # Tailwind CSS with shadcn variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page with SmoothScrollHero
├── components/
│   └── ui/
│       └── smooth-scroll-hero.tsx  # Hero component
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── public/               # Place your images here
```

## 🖼️ Adding Your Custom Image

To use your forest path image for the landing page:

1. **Place your image file** in the `/public` folder:
   - Example: `public/hero-image.jpg` or `public/hero-image.png`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

2. **Update `app/page.tsx`** to use your local image:
   ```tsx
   <SmoothScrollHero
     scrollHeight={1500}
     desktopImage="/hero-image.jpg"  // Your image path
     mobileImage="/hero-image.jpg"   // Same or different mobile version
     initialClipPercentage={25}
     finalClipPercentage={75}
   />
   ```

3. **Note**: Images in the `/public` folder are served from the root path, so `/hero-image.jpg` refers to `public/hero-image.jpg`

## 🎨 Component: SmoothScrollHero

Located at `/components/ui/smooth-scroll-hero.tsx`

### Props:
- `scrollHeight` (number): Height of the scroll section in pixels (default: 1500)
- `desktopImage` (string): Background image URL for desktop view
- `mobileImage` (string): Background image URL for mobile view
- `initialClipPercentage` (number): Initial clip path percentage (default: 25)
- `finalClipPercentage` (number): Final clip path percentage (default: 75)

### Features:
- Smooth parallax scroll effect
- Animated clip path reveal on scroll
- Background zoom effect during scroll
- Responsive design (separate images for mobile/desktop)

## 📦 Dependencies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **shadcn/ui** - UI component library structure

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Why `/components/ui`?

The `/components/ui` folder is the standard location for shadcn/ui components. This structure:
- Keeps UI components organized and easily accessible
- Follows shadcn/ui conventions for component management
- Makes it easy to add more components using `npx shadcn-ui@latest add [component]`
- Separates reusable UI components from page-specific components

## 🎯 Next Steps

1. Add your forest path image to `/public` folder
2. Update the image paths in `app/page.tsx`
3. Customize the scroll height and clip percentages as needed
4. Add more sections to your portfolio!
