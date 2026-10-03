<script setup lang="ts">
import { projects } from "~/data/site";
</script>

<template>
  <section id="projects" class="section section-alt">
    <div class="wrap">
      <RevealBlock><h2>Projects</h2></RevealBlock>
      <div class="grid">
        <RevealBlock v-for="p in projects" :key="p.title">
          <article class="card">
            <h3>{{ p.title }}</h3>
            <p>{{ p.description }}</p>
            <p class="tags">{{ p.tags.join(" · ") }}</p>
            <p class="links">
              <a v-for="l in p.links" :key="l.label" :href="l.href">{{ l.label }} →</a>
            </p>
          </article>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
