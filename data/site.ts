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

// Work experience, grouped by start year, most recent first. Keep each role to 5 key points.
export type Role = {
  company: string;
  title: string;
  period: string;
  year: string; // group heading
  current?: boolean;
  duties: string[];
};

export const experience: Role[] = [
  // ---------- 2026 ----------
  {
    company: "Cemmax Building Supplies",
    title: "Head of Marketing",
    period: "August 2026 – Present",
    year: "2026",
    current: true,
    duties: [
      "Plan, run and optimise paid ads on Google and social media, and manage the ad budget.",
      "Manage the brand's social media pages and content calendar.",
      "Generate and follow up leads from ads, WhatsApp and online enquiries.",
      "Improve SEO and online listings, including the website and Google Business Profile.",
      "Track analytics and report campaign results to management.",
    ],
  },
  {
    company: "Seven SS Stars Solar",
    title: "Head of Marketing",
    period: "August 2026 – Present",
    year: "2026",
    current: true,
    duties: [
      "Plan and run paid ad campaigns to promote solar products and installations.",
      "Manage social media pages and create content that explains the benefits of solar.",
      "Generate and follow up leads from ads, calls and WhatsApp.",
      "Manage the company's online presence and customer messages.",
      "Track campaign performance and report results to management.",
    ],
  },
  {
    company: "Brimax Solar Tech",
    title: "Head of Marketing (Consultation)",
    period: "September 2026 – Present",
    year: "2026",
    current: true,
    duties: [
      "Led the marketing strategy for the company's solar products and services.",
      "Ran paid ad campaigns to bring in leads for solar installations.",
      "Managed the brand, content and social media pages.",
      "Followed up leads and worked with sales to turn enquiries into customers.",
      "Tracked results and reported to management.",
    ],
  },
  {
    company: "Slims Arts and Design",
    title: "Head of Marketing",
    period: "April 2026 – July 2026",
    year: "2026",
    duties: [
      "Led marketing and brand positioning for the design business.",
      "Ran paid ads and campaigns to attract new clients.",
      "Managed social media pages and promoted the design portfolio.",
      "Handled client enquiries and lead follow-up.",
      "Tracked results and reported to management.",
    ],
  },

  // ---------- 2024 – 2025 ----------
  {
    company: "Kenty Furniture",
    title: "Head of Marketing",
    period: "2024 – 2025",
    year: "2024",
    duties: [
      "Built and led the marketing plan, aligned with the company's sales goals.",
      "Ran paid ad campaigns and managed the marketing budget.",
      "Managed social media pages, content and product photography.",
      "Generated leads and followed up customer enquiries until they became sales.",
      "Tracked campaign results and reported to management.",
    ],
  },
  {
    company: "ModernLux Furniture",
    title: "Head of Marketing and Sales Representative",
    period: "2024 – 2025",
    year: "2024",
    duties: [
      "Marketing: ran paid ads and campaigns, and managed the brand's social media pages.",
      "Marketing: directed content, product photography and branding.",
      "Sales: handled customer enquiries, presented products and prepared quotations.",
      "Sales: followed up leads, closed sales and kept customer records.",
      "Turned campaign enquiries into orders and reported results to management.",
    ],
  },
  {
    company: "Spiro",
    title: "Junior Campaign Strategist",
    period: "2024",
    year: "2024",
    duties: [
      "Supported the planning and rollout of marketing campaigns.",
      "Researched the audience, market and competitors.",
      "Helped develop campaign ideas and content plans.",
      "Coordinated with the team to deliver campaigns on schedule.",
      "Tracked campaign performance and shared results.",
    ],
  },

  // ---------- 2023 ----------
  {
    company: "Bebabeba Fleet",
    title: "Marketing Associate (Campaign Strategy)",
    period: "2023",
    year: "2023",
    duties: [
      "Worked as part of the marketing team on the company's campaigns.",
      "Helped plan campaign strategies to grow awareness and customers.",
      "Researched the target audience and competitors.",
      "Supported content and ad creation across the campaigns.",
      "Helped track results and suggest improvements.",
    ],
  },
  {
    company: "Liveal Africa",
    title: "Junior Web Developer",
    period: "2023",
    year: "2023",
    duties: [
      "Built and maintained web pages and website features.",
      "Made layouts responsive across phones, tablets and computers.",
      "Fixed bugs and tested changes before release.",
      "Used Git and GitHub for version control.",
      "Worked with senior developers and followed their guidance.",
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
