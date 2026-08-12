# Aashish Chavan — Personal Technology Portfolio

Premium personal website for **Aashish Chavan** — Software Engineer, Technology Entrepreneur, and CEO of WEBCRAFTERA LLP.

## Tech Stack

- **Next.js** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** (animations)
- **Lucide React** + **React Icons** (iconography)
- **MongoDB** (contact form storage, optional)

## Getting Started

```bash
npm install
cp .env.example .env.local  # Add your MongoDB connection string
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string (server-side only) |
| `MONGODB_DB` | MongoDB database name (default: `aashishchavan`) |

**Never commit `.env` files.** Only `.env.example` with placeholder values is committed.

## Adding a Profile Image

Place a professional photo at `public/images/profile.webp` and uncomment the Image component in `components/hero/Hero.tsx`.

## Adding Projects

Edit the `projects` array in `components/projects/Projects.tsx` to add real work.

## Deployment

Deploy to **Vercel** — set environment variables in the Vercel dashboard.

## License

© 2026 Aashish Chavan. All rights reserved.
