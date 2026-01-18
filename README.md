# mdx-blogs

## Overview

**`mdx-blogs`** is a Next.js-based blog application that renders content written in MDX. It integrates MDX with a modern React/Next.js stack including Tailwind CSS and utility libraries to provide a performant, customizable blogging platform. The project is structured to support content authored as MDX files and styled UI components for a polished reading experience.

## Features

- Next.js 15 application with MDX content support via `next-mdx-remote`.
- Tailwind CSS utility-first styling with animation and typography enhancements.
- Component-based UI for reusable visual elements.
- GraphQL client integration with Contentful CMS (client included in dependencies).
- Prism syntax highlighting for code blocks in blog posts.
- Scroll area and tab UI primitives via Radix UI.
- TypeScript support for safer development.

## Tech Stack

- **Next.js 15** (React framework)  
- **React 19** (UI library)  
- **MDX support** via `next-mdx-remote`  
- **Tailwind CSS v4** with typography, animation configurations  
- **Radix UI** components  
- **GraphQL + graphql-request** for data querying  
- **Prism React Renderer** for code syntax highlighting  
- **TypeScript** for static typing  
- Linting via **ESLint**


- **`app/`** houses Next.js application routes and page entrypoints.
- **`components/`** contains React components used throughout the UI.
- **`constants/`** stores static constants such as routing or config values.
- **`content/`** is where MDX blog posts or pages are located and consumed.
- **`features/`** groups functionality around business logic or domain features.
- **`lib/`** includes utility functions (e.g., data fetching, MDX serialization).
- **`public/`** serves static files used by the app.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohamed-maher50/mdx-blogs.git
   cd mdx-blogs
2. Install dependencies (npm, yarn, or pnpm):

npm install
# or
yarn install
# or
pnpm install
Running the Project
Development
Start the local development server:
npm run dev

Visit http://localhost:3000 in your browser.
Production Build
Build the optimized production bundle:
npm run build

Start the production server:
npm start

Environment Variables
This project does not include committed .env files. However, typical MDX/Contentful integrations may expect:
VariablePurposeCONTENTFUL_SPACE_IDContentful space identifierCONTENTFUL_ACCESS_TOKENAPI token for ContentfulNEXT_PUBLIC_BASE_URLBase URL for metadata and canonical links

Only include secure variables in .env.local, exclude from version control.

Usage
Developers can author blog posts as .mdx files under the content/ directory. Each MDX file can include frontmatter metadata (title, date, tags) and JSX components importable from the components/ directory. Next.js pages automatically route based on folder structure under app/.
Example MDX file:
---
title: "My First Post"
date: "2025-01-01"
---

# Hello World

This is my MDX post!

Scripts
ScriptDescriptiondevRuns development server with TurbopackbuildCompiles optimized production buildstartStarts production serverlintRuns ESLint against source files
These are defined in package.json:
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

Architecture
The application uses the App Router of Next.js with a modular, content-driven architecture:


MDX files are compiled at build time (or on demand) using next-mdx-remote.


A layout layer in app/ wraps pages for consistent UI around blog posts.


Components and utility functions abstract UI concerns and data fetching to maintain separation of concerns.


Tailwind CSS provides styling and utilities for responsive, consistent design.


Optional GraphQL integration (via graphql-request and contentful) suggests support for CMS-backed content.


Future Improvements
Based on the current codebase, consider:


Adding documentation for content schema and MDX rendering configuration.


Implementing SEO metadata support (Open Graph, structured data).


Providing pagination or tag/category filtering for blog listings.


Adding automated tests (Jest/React Testing Library).


Incorporating image optimization (e.g., Next.js next/image integration with MDX).


License
This project defaults to the MIT License unless otherwise specified.
MIT License


---

If you want, I can also generate **documentation for how to author MDX content** for this project or a **deployment guide** (e.g., Vercel configuration).
::contentReference[oaicite:0]{index=0}

## Project Structure

