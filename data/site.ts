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
  role?: string; // your role on the project, shown as a badge
  url: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  details: { about: string; role?: string; features: string[] };
};

export const projects: Project[] = [
  {
    slug: "eagles-wings-community",
    title: "Eagle's Wings Community Group",
    category: "Software",
    role: "Built by me",
    url: "https://www.eagleswingscommunity.org/",
    description:
      "Website for a Kenyan nonprofit that feeds vulnerable families, mentors youth and runs medical outreach camps.",
    tags: ["Nonprofit", "Donations", "Volunteers"],
    links: [{ label: "Live site", href: "https://www.eagleswingscommunity.org/" }],
    details: {
      about:
        "Eagle's Wings Community Group is a Kenya-based nonprofit that supports vulnerable families through feeding programmes, youth mentorship and medical outreach camps.",
      role: "I built this website.",
      features: [
        "Pages for the three programmes: feeding families, youth mentorship and medical camps",
        "Donation and volunteer sections",
        "Impact statistics and success stories",
        "Contact form and WhatsApp for enquiries",
      ],
    },
  },
  {
    slug: "pcea-kitengela-schools",
    title: "PCEA Kitengela Township Schools",
    category: "Software",
    role: "Co-developed",
    url: "https://pceakts.sc.ke/index",
    description:
      "School website offering CBC education from preschool to junior school, with admissions and school life information.",
    tags: ["School website", "Admissions", "Gallery"],
    links: [{ label: "Live site", href: "https://pceakts.sc.ke/index" }],
    details: {
      about:
        "PCEA Kitengela Township Schools is a Christian school on the Namanga–Nairobi Highway offering CBC education for Preschool, Primary and Junior School.",
      role: "I partnered in developing this website.",
      features: [
        "Sections for Early Years, Primary and Junior Secondary",
        "Admissions, academics and co-curricular activities pages",
        "School life photo gallery",
        "Information about the school's mission and approach",
      ],
    },
  },
  {
    slug: "modern-lux-furnitures",
    title: "Modern Lux Furnitures",
    category: "Software",
    role: "Managed by me",
    url: "https://modernluxfurnitures.co.ke/",
    description:
      "E-commerce store for modern residential and commercial furniture, with a full catalogue and WhatsApp ordering.",
    tags: ["E-commerce", "Catalogue", "WhatsApp ordering"],
    links: [{ label: "Live site", href: "https://modernluxfurnitures.co.ke/" }],
    details: {
      about:
        "Modern Lux Furnitures is an online furniture retailer offering a blend of modern design and comfort for homes and offices.",
      role: "I manage this website.",
      features: [
        "Product catalogue by room and category: office, dining, bedroom, living room and outdoor",
        "Shopping cart and customer accounts",
        "WhatsApp and SMS ordering",
        "Mailing list sign-up",
      ],
    },
  },
  {
    slug: "fairprice-furniture",
    title: "Fairprice Furniture Kenya",
    category: "Software",
    role: "Managed by me",
    url: "https://fairpricefurniture.co.ke/",
    description:
      "E-commerce store for locally made furniture in Kenya, with product search and WhatsApp orders.",
    tags: ["E-commerce", "Catalogue", "Product search"],
    links: [{ label: "Live site", href: "https://fairpricefurniture.co.ke/" }],
    details: {
      about:
        "Fairprice Furniture Kenya is an online retailer specialising in locally made furniture, from bedroom sets and dining tables to recliners and office pieces.",
      role: "I manage this website.",
      features: [
        "Catalogue organised by room type: bedroom, kitchen, living room, office and outdoor",
        "Shopping cart, login and registration",
        "Product search",
        "WhatsApp for orders and enquiries",
      ],
    },
  },
  {
    slug: "wajibu",
    title: "WAJIBU",
    category: "Software",
    role: "Built by me",
    url: "https://wajibu.uk/",
    description:
      "Website for an ESG strategy, compliance and sustainability advisory firm based in London.",
    tags: ["Corporate website", "Consulting", "ESG"],
    links: [{ label: "Live site", href: "https://wajibu.uk/" }],
    details: {
      about:
        "WAJIBU is an ESG (Environmental, Social and Governance) strategy, compliance and sustainability advisory firm based in London.",
      role: "I built this website.",
      features: [
        "Home, About, Services, Insights, Impact and Contact pages",
        "A prominent \"Book Consultation\" call to action",
      ],
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
