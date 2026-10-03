<script setup lang="ts">
import { projects, settings } from "~/data/site";

const route = useRoute();
const idx = projects.findIndex((p) => p.slug === route.params.slug);
if (idx === -1) throw createError({ statusCode: 404, statusMessage: "Project not found", fatal: true });

const project = projects[idx];
const next = projects[(idx + 1) % projects.length];

useHead({
  title: `${project.title} | Elijah James`,
  meta: [
    { name: "description", content: project.description },
    { property: "og:title", content: `${project.title} | Elijah James` },
    { property: "og:description", content: project.description },
  ],
  link: [{ rel: "canonical", href: `${settings.siteUrl}/projects/${project.slug}` }],
});
</script>

<template>
  <main class="page">
    <div class="wrap narrow">
      <NuxtLink to="/#projects" class="link back"><span class="arrow back-arrow">←</span> All projects</NuxtLink>
      <p class="kicker">{{ project.category }} case study</p>
      <h1 class="page-title">{{ project.title }}</h1>
      <p class="about-text">{{ project.description }}</p>
      <div class="chips">
        <span v-for="t in project.tags" :key="t" class="chip">{{ t }}</span>
      </div>

      <div class="case">
        <div class="case-block">
          <h2>The goal</h2>
          <p>{{ project.caseStudy.goal }}</p>
        </div>
        <div class="case-block">
          <h2>What I did</h2>
          <p>{{ project.caseStudy.approach }}</p>
        </div>
        <div class="case-block">
          <h2>The result</h2>
          <p>{{ project.caseStudy.result }}</p>
        </div>
      </div>

      <p v-if="project.links.length" class="links page-links">
        <a v-for="l in project.links" :key="l.label" :href="l.href" class="link">{{ l.label }} <span class="arrow">→</span></a>
      </p>

      <NuxtLink :to="`/projects/${next.slug}`" class="next-card">
        <small>Next project</small>
        <span>{{ next.title }} <span class="arrow">→</span></span>
      </NuxtLink>
    </div>
  </main>
</template>
