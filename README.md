# Elijah James — Portfolio

Personal portfolio of **Elijah James**, software engineer and digital marketer.

**Live site:** https://elijahjamesportfloio.vercel.app

Built with [Nuxt 3](https://nuxt.com) (Vue 3, TypeScript) and plain CSS. No UI library, no database.
Hosted on Vercel; every push to `main` deploys automatically.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run preview    # serve the production build
```

Requires Node.js 18 or newer.

## Where things live

```
.
├── app.vue                  Page shell: header, current page, footer, site-wide SEO data
├── nuxt.config.ts           Site title, meta tags, fonts
├── data/
│   └── site.ts              ALL content and settings (edit this to change the site)
├── pages/
│   ├── index.vue            Home page: sections in order
│   ├── projects/[slug].vue  One page per software project
│   └── blog/[slug].vue      One page per blog post (hidden until posts exist)
├── components/
│   ├── SiteHeader.vue       Top bar and mobile menu
│   ├── SiteFooter.vue       Footer
│   ├── HeroSection.vue      Intro with photo and typing effect
│   ├── AboutSection.vue     About
│   ├── ProjectsSection.vue  Software projects grid
│   ├── SkillsSection.vue    Tools shown as icons
│   ├── MarketingSection.vue Digital marketing process and services
│   ├── ExperienceSection.vue Work experience with company logos, grouped by year
│   ├── TestimonialsSection.vue  Reviews (hidden until you add some)
│   ├── InsightsSection.vue  Blog list (hidden until you add posts)
│   ├── ContactSection.vue   Contact details and message form
│   ├── SocialLinks.vue      GitHub, LinkedIn and WhatsApp icon buttons
│   ├── RevealBlock.vue      Fade-in on scroll
│   └── TypeWriter.vue       Typing and deleting text
├── assets/css/main.css      All styling
└── public/                  Files served as-is
    ├── icons/               Tool logos (HTML5, React, Laravel, ...)
    ├── logos/               Company logos for the Experience section
    ├── images/profile.webp  Your photo (hero picture)
    ├── favicon.svg, og.png  Tab icon and link-preview image
    └── robots.txt, sitemap.xml
```

## Editing content

Everything you see on the site comes from [`data/site.ts`](data/site.ts):
profile, contact details, projects, skills, experience, testimonials and blog posts.

- **Photo:** replace `public/images/profile.webp` (or change `photo` in `data/site.ts` if you use another file name).
- **Company logo:** add the image to `public/logos/` and set `logo` on that role in `data/site.ts`.
  Without a logo, the role shows the company's initials.
- **New project:** add an entry to `projects`, then add its page to `public/sitemap.xml`.

### Optional features (settings in `data/site.ts`)

| Setting | What it does |
| --- | --- |
| `formEndpoint` and `formAccessKey` | The contact form is connected to Web3Forms, so messages arrive in your inbox. It collects full name, service wanted, location and message. Edit the service choices in `contactServices`. |
| `cv` | Shows a "Download CV" button. Put the PDF in `public/` and set e.g. `"/Elijah-James-CV.pdf"`. |
| `whatsapp` | Number with country code, digits only. Shows the WhatsApp icon and contact row. |
| `bookingUrl` | Shows a "Book a call" link (e.g. Calendly). |
| `analyticsId` | Loads Google Analytics (e.g. `G-XXXXXXXXXX`). |

Add entries to `testimonials` or `posts` and the Reviews and Insights sections appear automatically.

## Deploying

Pushing to `main` on GitHub triggers a Vercel build. If the site address ever changes, update
`siteUrl` in `data/site.ts`, `nuxt.config.ts`, `public/robots.txt` and `public/sitemap.xml`.

## Credits

Tool icons from [Devicon](https://devicon.dev). Company logos belong to their respective owners
and are used only to show where the work was done.
