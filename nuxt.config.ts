// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Elijah James | Software Engineer & Digital Marketer",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap",
        },
      ],
      script: [
        {
          // Set the saved theme before first paint to avoid a flash.
          innerHTML:
            "try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){}",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Portfolio of Elijah James, software engineer and digital marketing strategist.",
        },
      ],
    },
  },
});
