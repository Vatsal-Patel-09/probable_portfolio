# Placeholder Images Guide

This folder contains placeholder images for the portfolio project.

## Blog Images

The following images are referenced in the blogs.json file:
- nextjs-14.jpg
- nodejs-express.jpg
- typescript-react.jpg
- tailwind-css.jpg
- javascript-closures.jpg
- docker-fundamentals.jpg

## Project Images

The following images are referenced in the projects.json file:
- project-ecommerce.jpg
- project-taskmanager.jpg
- project-portfolio-builder.jpg
- project-weather.jpg

## Adding Your Own Images

Replace these placeholder references with your actual image files. Make sure to:
1. Place blog images in `/public/images/blog/`
2. Place project thumbnails in `/public/images/` (as referenced by the project thumbnail paths)
3. Use common image formats (jpg, png, webp)
4. Optimize images for web (recommended max width: 1200px)

## Image Paths

In the JSON files:
- Blog images use: `/images/blog/filename.jpg`
- Project images use: `filename.jpg` (will be prefixed with Directus base path in ProjectCard component)

Note: You'll need to update the ProjectCard component to handle local images instead of Directus URLs.
