# Code Dimension Website - Project Context

## Project Overview
- **Name**: Code Dimension Website
- **Framework**: Astro v5.11.0
- **Type**: Static website for Code Dimension platform
- **URL**: https://codedimension.com.br (production)
- **Description**: A platform focused on teaching Front-End and Angular through didactic and relevant content

## Technology Stack
- **Core**: Astro with TypeScript
- **Styling**: TailwindCSS + DaisyUI
- **Components**: Astro components (.astro files)
- **Additional Libraries**: 
  - Swiper (carousel/slider)
  - Axios (HTTP client)
  - Sentry (error monitoring)

## Project Structure
```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page routes
│   ├── partials/        # Section components
│   └── shared/         # Shared utilities
├── astro.config.mjs     # Astro configuration
├── site-config.ts       # Site configuration
├── tailwind.config.cjs  # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## Key Components
1. **Layout**: Main layout structure with Header, Footer, and global styles
2. **Pages**: 
   - Home page (index.astro)
   - Courses page (cursos/)
   - Subscribe page (se-inscreva.astro)
3. **Home Sections**:
   - Banner
   - Numbers (audience data)
   - First (platform description)
   - Courses
   - Reviews
   - Newsletter

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Pending Tasks (from TODO)
- Add new banner image
- Add audience data section
- Implement "Our Courses" section
- Add "Technologies we teach" section
- Add section: first platform focused on Angular
- Add comments section
- Add FAQ section
- Add "latest blog posts" section

## Configuration Details
- Uses TailwindCSS with daisyUI components
- Integrates Sentry for error monitoring
- Sitemap generation enabled
- Custom site configuration in site-config.ts

## Environment
- Production URL: https://codedimension.com.br
- Development URL: https://codedimension-website-dev-env.netlify.app