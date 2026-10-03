// Edit this file to update your portfolio content.

export const profile = {
  name: "Elijah James",
  role: "Software Engineer · Digital Marketer",
  rotating: ["Software Engineer", "Digital Marketer", "Web Developer", "Growth Strategist"],
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
  linkedin: { label: "linkedin.com/in/your-name", href: "https://linkedin.com/in/your-name" },
  github: { label: "github.com/your-name", href: "https://github.com/your-name" },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Nuxt", "Vue", "TypeScript"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source code", href: "#" },
    ],
  },
  {
    title: "Project Two",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "MongoDB"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source code", href: "#" },
    ],
  },
  {
    title: "Project Three",
    description: "Short description of a marketing campaign or product, with the result it achieved.",
    tags: ["SEO", "Social Ads", "Analytics"],
    links: [{ label: "Case study", href: "#" }],
  },
];

export const engineering = [
  { label: "Front end", items: "HTML, CSS, JavaScript, Vue, React" },
  { label: "Back end", items: "Node.js, Python, REST APIs" },
  { label: "Databases", items: "MySQL, MongoDB" },
  { label: "Tools", items: "Git, GitHub, VS Code" },
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

export const marqueeWords = [
  "Web Development", "SEO", "Vue", "Social Ads", "Node.js", "Content Strategy",
  "React", "Email Marketing", "Analytics", "Brand Growth", "REST APIs", "Conversion",
];
