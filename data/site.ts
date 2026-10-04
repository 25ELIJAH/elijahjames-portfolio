// Edit this file to update your portfolio content and settings.

export const settings = {
  siteUrl: "https://elijahjamesportfloio.vercel.app",
  // Contact form: create a free key at web3forms.com (or use a formspree.io URL) and paste it here.
  // While these are empty, the form opens the visitor's email app instead.
  formEndpoint: "", // e.g. "https://api.web3forms.com/submit"
  formAccessKey: "", // Web3Forms access key (leave empty for Formspree)
  // Each of these shows a button on the site only when filled in.
  cv: "", // e.g. "/Elijah-James-CV.pdf" after saving the file in the public folder
  whatsapp: "254740840018", // number with country code, digits only
  bookingUrl: "", // e.g. your Calendly link
  analyticsId: "", // Google Analytics measurement ID, e.g. "G-XXXXXXXXXX"
};

export const profile = {
  name: "Elijah James",
  role: "Software Engineer · Digital Marketer",
  rotating: ["Digital Marketer", "Software Engineer"],
  tagline:
    "I build web software and the marketing strategies that get it in front of the right people.",
  about:
    "I'm a software engineer and digital marketer. I write clean, practical code, and I plan campaigns around real goals: traffic, leads and sales. Working in both areas means products I build are made to be found and used.",
  photo: "/images/profile.jpg", // put your photo at public/images/profile.jpg
  initials: "EJ",
};

export const contact = {
  email: "easterjames420@gmail.com",
  phone: "0740 840 018",
  phoneHref: "0740840018",
  linkedin: { label: "linkedin.com/in/elijahjames254", href: "https://www.linkedin.com/in/elijahjames254" },
  github: { label: "github.com/25ELIJAH", href: "https://github.com/25ELIJAH" },
};

export type Project = {
  slug: string;
  title: string;
  category: "Software" | "Marketing";
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  caseStudy: { goal: string; approach: string; result: string };
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    category: "Software",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Nuxt", "Vue", "TypeScript"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source code", href: "#" },
    ],
    caseStudy: {
      goal: "Describe the problem or goal this project set out to solve.",
      approach: "Explain what you built or did, and the tools and decisions behind it.",
      result: "Share the outcome with a number if you can, such as speed, users or sales.",
    },
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Software",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "Vercel"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source code", href: "#" },
    ],
    caseStudy: {
      goal: "Describe the problem or goal this project set out to solve.",
      approach: "Explain what you built or did, and the tools and decisions behind it.",
      result: "Share the outcome with a number if you can, such as speed, users or sales.",
    },
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Marketing",
    description: "Short description of a marketing campaign or product, with the result it achieved.",
    tags: ["SEO", "Social Ads", "Analytics"],
    links: [],
    caseStudy: {
      goal: "Describe the client, their goal and the audience you wanted to reach.",
      approach: "Explain the channels, content and tactics you used.",
      result: "Share the outcome with numbers, such as traffic growth, leads or revenue.",
    },
  },
];

export const engineering = [
  { label: "Front end", items: "HTML5, CSS3, JavaScript (ES6+), React, Vue" },
  { label: "Back end", items: "Node.js, Express, PHP, Laravel, Python, Java" },
  { label: "Databases", items: "MongoDB, SQL" },
  { label: "Deployment & tools", items: "Vercel, Git, GitHub" },
];

export const marketing = [
  {
    title: "Search (SEO)",
    description: "Keyword research, on-page fixes and content plans that bring steady organic traffic.",
  },
  {
    title: "Social media",
    description: "Content calendars and paid campaigns built around the audience you want to reach.",
  },
  {
    title: "Email & funnels",
    description: "Simple sequences that turn visitors into leads and leads into customers.",
  },
  {
    title: "Analytics",
    description: "Tracking and reporting so every decision is based on numbers, not guesses.",
  },
];

export const marketingSteps = [
  { title: "Research", text: "Understand the audience, the market and the competition." },
  { title: "Strategy", text: "Set clear goals and pick the channels that fit them." },
  { title: "Execute", text: "Build the site, launch the campaigns, publish the content." },
  { title: "Measure", text: "Track results, learn from the data and improve." },
];

// Work experience, most recent first.
export type Role = { company: string; title: string; period: string; current?: boolean; duties: string[] };

const headOfMarketingDuties = [
  "Built and led the marketing strategy and plan, aligned with the company's sales goals.",
  "Planned, created and scheduled content across the company's social media pages.",
  "Ran paid advertising campaigns and managed the marketing budget.",
  "Directed branding, product photography and creative work so every post and ad looked consistent.",
  "Generated leads, answered customer enquiries and followed them up until they became sales.",
  "Tracked campaign results and reported what was working to management.",
  "Coordinated designers, photographers and content creators on campaigns.",
];

export const experience: Role[] = [
  {
    company: "Cemmax Building Supplies",
    title: "Digital Marketer",
    period: "August 2026 – Present",
    current: true,
    duties: [
      "Plan and run the full digital marketing for the business across search, social media, email and messaging.",
      "Improve the website and online listings for search (SEO), including keywords, page content and Google Business Profile.",
      "Create and schedule daily content for social media: product posts, graphics, short videos and promotions.",
      "Run and optimise paid campaigns on Google and social platforms, managing budgets and targeting.",
      "Generate and follow up leads through WhatsApp, email and social media enquiries.",
      "Run email and WhatsApp campaigns to keep customers informed about stock, offers and projects.",
      "Manage the product catalogue online and promote building materials to contractors, builders and homeowners.",
      "Handle community management: replying to comments and messages and protecting the brand's online reputation.",
      "Research competitors and the market to find new opportunities.",
      "Track website and campaign analytics, and report on traffic, leads and results.",
    ],
  },
  {
    company: "Seven Stars Solar",
    title: "Digital Marketer",
    period: "August 2026 – Present",
    current: true,
    duties: [
      "Promote solar products and installation services through social media, search and paid advertising.",
      "Create educational and promotional content that explains solar benefits to homes and businesses.",
      "Generate and qualify leads from online enquiries, calls and WhatsApp messages.",
      "Manage the company's online presence, including pages, listings and customer messages.",
      "Track campaign performance and report results.",
    ],
  },
  {
    company: "Brimax Solar Tech",
    title: "Head of Marketing",
    period: "Until September 2026",
    duties: [
      "Led the marketing strategy for the company's solar products and services.",
      "Planned and ran digital campaigns to bring in leads for solar installations.",
      "Managed the brand, content and social media presence.",
      "Followed up leads and worked with the sales side to turn enquiries into customers.",
      "Tracked results and reported to management.",
    ],
  },
  {
    company: "Slims Arts and Design",
    title: "Head of Marketing",
    period: "April 2026 – July 2026",
    duties: [
      "Led the marketing and brand positioning for the design business.",
      "Promoted the company's design work and portfolio across social media and online channels.",
      "Planned content and campaigns to attract new clients and keep existing ones.",
      "Handled client enquiries and lead follow-up.",
      "Tracked campaign results and reported to management.",
    ],
  },
  {
    company: "Kenty Furniture",
    title: "Head of Marketing",
    period: "2024 – 2025",
    duties: headOfMarketingDuties,
  },
  {
    company: "ModernLux Furniture",
    title: "Head of Marketing and Sales Representative",
    period: "2024 – 2025",
    duties: [
      "Marketing: built and ran the marketing plan, social media content and paid campaigns for the furniture brand.",
      "Marketing: directed branding, product photography and creative work, and tracked campaign results.",
      "Sales: handled customer enquiries by phone, WhatsApp, social media and in person.",
      "Sales: presented products, advised customers on options and prepared quotations.",
      "Sales: followed up leads, closed sales and kept customer records up to date.",
      "Linked marketing and sales by turning campaign enquiries into orders.",
    ],
  },
];

// Testimonials only appear on the site when you add real ones here.
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [
  // { quote: "Elijah grew our traffic in three months.", name: "Client Name", role: "Company" },
];

// The Insights (blog) section only appears when you add a post here.
export type Post = { slug: string; title: string; date: string; summary: string; body: string[] };
export const posts: Post[] = [
  // {
  //   slug: "seo-basics",
  //   title: "SEO basics for a new website",
  //   date: "2026-10-10",
  //   summary: "Five things to fix before you publish.",
  //   body: ["First paragraph...", "Second paragraph..."],
  // },
];
