<script setup lang="ts">
import { profile, contact, settings } from "~/data/site";

const gid = settings.analyticsId;

useHead({
  script: [
    // Structured data so search engines understand who this site is about.
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        url: settings.siteUrl,
        jobTitle: "Software Engineer and Digital Marketer",
        email: contact.email,
        telephone: contact.phoneHref,
        sameAs: [contact.linkedin.href, contact.github.href],
        knowsAbout: ["Vue", "React", "React Native", "Node.js", "PHP", "Vercel", "Digital marketing"],
      }),
    },
    // Google Analytics loads only when an ID is set in data/site.ts.
    ...(gid
      ? [
          { src: `https://www.googletagmanager.com/gtag/js?id=${gid}`, async: true },
          {
            innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gid}');`,
          },
        ]
      : []),
  ],
});
</script>

<template>
  <div>
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>
