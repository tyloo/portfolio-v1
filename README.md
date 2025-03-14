# Portfolio v1

![Portfolio Preview](/public/preview.jpg)

> **Note:** This is an older version of my portfolio. Check out my newest
> portfolio at [github.com/tyloo/tyloo.fr](https://github.com/tyloo/tyloo.fr)

A modern, responsive portfolio website built with Next.js, MDX, and Tailwind
CSS. This portfolio showcases projects, blog posts, and provides contact
functionality.

## Features

- **Responsive Design**: Works seamlessly across all devices
- **Dark/Light Mode**: Theme toggle for user preference
- **MDX Content**: Write content in Markdown with JSX components
- **Blog Posts**: Share thoughts and ideas through blog posts
- **Project Showcase**: Display projects with images and descriptions
- **Contact Form**: Get in touch via the contact form with reCAPTCHA protection
- **Newsletter Subscription**: Allow visitors to subscribe to updates
- **Syntax Highlighting**: Code blocks are syntax highlighted using Sugar High

## Technologies

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **MDX**: Markdown with JSX components
- **React Hook Form**: Form validation and handling
- **Zod**: Schema validation
- **Resend**: Email service for contact form
- **Google reCAPTCHA**: Protection against spam
- **next-themes**: Theme switching functionality
- **next-mdx-remote**: MDX rendering in Next.js

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository

```bash
git clone https://github.com/tyloo/portfolio-v1.git
cd portfolio-v1
```

2. Install dependencies

```bash
pnpm install
```

3. Create a `.env` file based on `.env.example`

```bash
cp .env.example .env
```

4. Fill in the environment variables in the `.env` file:

```
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_resend_audience_id
CONTACT_SENDER_NAME=Your Name
CONTACT_SENDER_EMAIL=your-email@example.com
CONTACT_RECIPIENT_NAME=Recipient Name
CONTACT_RECIPIENT_EMAIL=recipient-email@example.com
RECAPTCHA_SECRET=your_recaptcha_secret_key

NEXT_PUBLIC_RECAPTCHA=your_recaptcha_site_key
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the
result.

### Build

Build the application for production:

```bash
pnpm build
```

### Start

Start the production server:

```bash
pnpm start
```

## Project Structure

- `src/app`: Next.js app router pages and layouts
- `src/components`: React components
- `src/content`: MDX content for posts and projects
- `src/emails`: Email templates for contact form
- `src/lib`: Utility functions and data fetching
- `public`: Static assets

## Adding Content

### Blog Posts

Add new blog posts by creating MDX files in `src/content/posts/` with the
following frontmatter:

```mdx
---
title: Post Title
summary: Brief summary of the post
image: /images/posts/image-name.webp
author: Your Name
publishedAt: '2024-10-15'
---

Content goes here...
```

### Projects

Add new projects by creating MDX files in `src/content/projects/` with the
following frontmatter:

```mdx
---
title: Project Title
summary: Brief summary of the project
image: /images/projects/image-name.jpg
author: Your Name
publishedAt: '2024-10-16'
---

Content goes here...
```

## License

MIT
