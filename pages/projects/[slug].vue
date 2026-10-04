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
      <p class="kicker">{{ project.category }} project</p>
      <h1 class="page-title">{{ project.title }}</h1>
      <p v-if="project.role" class="role-badge">{{ project.role }}</p>
      <p class="about-text">{{ project.description }}</p>
      <div class="chips">
        <span v-for="t in project.tags" :key="t" class="chip">{{ t }}</span>
      </div>

      <div class="case">
        <div class="case-block">
          <h2>About the project</h2>
          <p>{{ project.details.about }}</p>
        </div>
        <div v-if="project.details.role" class="case-block">
          <h2>My role</h2>
          <p>{{ project.details.role }}</p>
        </div>
        <div class="case-block">
          <h2>What the site includes</h2>
          <ul class="xp-duties">
            <li v-for="f in project.details.features" :key="f">{{ f }}</li>
          </ul>
        </div>
      </div>

      <p class="links page-links">
        <a :href="project.url" target="_blank" rel="noopener noreferrer" class="btn">Visit the live site <span class="arrow">↗</span></a>
      </p>

      <NuxtLink :to="`/projects/${next.slug}`" class="next-card">
        <small>Next project</small>
        <span>{{ next.title }} <span class="arrow">→</span></span>
      </NuxtLink>
    </div>
  </main>
</template>
