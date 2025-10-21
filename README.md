# Interactive React Site

An interactive static site built with **React.js** and **shadcn/ui** components, featuring a modern UI with Tailwind CSS.

![Interactive React Site](https://github.com/user-attachments/assets/6e98971b-d1c2-4fb5-bc3d-bdd871d3c5d2)

## Features

- 🎨 **Modern UI Components** - Built with shadcn/ui component library
- ⚡ **Fast Build** - Powered by Vite for lightning-fast development and builds
- 🎯 **Interactive Elements** - Counter, forms, and various button styles
- 💅 **Tailwind CSS** - Utility-first CSS framework for styling
- 📱 **Responsive Design** - Works seamlessly on all device sizes
- 🌓 **Dark Mode Support** - CSS variables ready for theme switching

## Demo Components

The site includes several interactive components:

### Interactive Counter
- Increment/Decrement buttons
- Reset functionality
- Real-time state updates

### Contact Form
- Input fields with validation
- Success message feedback
- Form submission handling

### Button Variants
- Multiple button styles (default, secondary, outline, ghost, link, destructive)
- Different button sizes (small, default, large)
- All powered by shadcn/ui

## Tech Stack

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Retr0557/test.git
cd test
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

Build the static site:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       └── input.jsx
│   ├── lib/
│   │   └── utils.js     # Utility functions (cn helper)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies

```

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel**: `npm run build` and deploy the `dist` folder
- **Netlify**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Build and push the `dist` folder to a `gh-pages` branch
- **Cloudflare Pages**: Connect repository with build command `npm run build` and output directory `dist`

## Customization

### Adding More shadcn/ui Components

The project is configured to work with shadcn/ui. You can add more components by creating them in `src/components/ui/` following the shadcn/ui patterns.

### Styling

- Global styles and Tailwind configuration are in `src/index.css`
- Tailwind configuration can be modified in `tailwind.config.js`
- Component-specific styles use Tailwind utility classes

## License

MIT
