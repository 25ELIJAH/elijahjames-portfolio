# Elijah James — Portfolio

Nuxt 3 (Vue 3, TypeScript) portfolio.

## Run

```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Edit your content

Everything lives in `data/site.ts`: profile, contact details, projects (with case studies),
skills, marketing, testimonials and blog posts. Put your photo at `public/images/profile.jpg`.

## Optional features (turn on in `settings` in `data/site.ts`)

| Setting | What it does |
| --- | --- |
| `formEndpoint` + `formAccessKey` | Contact form sends straight to your inbox. Free key at web3forms.com. Until set, the form opens the visitor's email app. |
| `cv` | Shows a "Download CV" button. Save the PDF in `public/` and set e.g. `"/Elijah-James-CV.pdf"`. |
| `whatsapp` | Shows WhatsApp links. Digits only with country code. |
| `bookingUrl` | Shows a "Book a call" link (e.g. Calendly). |
| `analyticsId` | Loads Google Analytics (e.g. `G-XXXXXXXXXX`). |

Add items to `testimonials` or `posts` and the Reviews and Insights sections appear automatically.

If you change the site's address, update `siteUrl` in `data/site.ts`, `nuxt.config.ts`,
`public/robots.txt` and `public/sitemap.xml`. Add each new project to `public/sitemap.xml`.

## Deploy

Push to GitHub; Vercel builds `main` automatically.
