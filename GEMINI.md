# Project Context for Gemini CLI

This document provides context for the Gemini CLI to understand the project better.

## Project Overview

This is the website for Code Dimension, an online platform that offers programming courses, with a focus on Angular. The website is built with the Astro framework.

## Tech Stack

-   **Framework**: Astro
-   **Language**: TypeScript
-   **e2e Tests**: Playwright
-   **Styling**: Tailwind CSS
-   **Formatting**: Prettier

## Project Structure

-   `src/pages`: Contains the pages of the site.
-   `src/layouts`: Contains the basic layouts for the pages.
-   `src/partials`: Contains the different sections used in the pages.
-   `src/shared`: Contains shared components, functions, and data used across the application.
-   `public`: Contains static assets like images and fonts.
-   `e2e`: Contains end-to-end tests written with Playwright.

## Development Conventions

-   **Code Style**: Follow the existing code style and the Prettier configuration (`.prettierrc`).
-   **Components**: Astro components are used to structure the pages.
-   **Data**: Shared data, like the list of courses, is stored in `src/shared/data`.
-   **Tests**: When adding new features, please also add corresponding e2e tests in the `e2e/tests` directory. The tests should be written using Playwright.

## Configuration Details
- Uses TailwindCSS with daisyUI components
- Integrates Sentry for error monitoring
- Sitemap generation enabled
- Custom site configuration in site-config.ts

## Environment
- Production URL: https://codedimension.com.br
- Development URL: https://codedimension-website-dev-env.netlify.app
