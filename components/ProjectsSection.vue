<script setup lang="ts">
import { projects } from "~/data/site";

const num = (i: number) => String(i + 1).padStart(2, "0");

const filters = ["All", ...new Set(projects.map((p) => p.category))];
const active = ref("All");
const shown = computed(() =>
  projects
    .map((p, i) => ({ ...p, n: num(i) }))
    .filter((p) => active.value === "All" || p.category === active.value)
);
</script>

<template>
  <section id="projects" class="section section-alt">
    <div class="wrap">
      <RevealBlock class="section-head">
        <p class="kicker">Selected work</p>
        <h2>Projects</h2>
        <div v-if="filters.length > 2" class="filters" role="group" aria-label="Filter projects">
          <button
            v-for="f in filters"
            :key="f"
            type="button"
            class="filter"
            :class="{ active: active === f }"
            @click="active = f"
          >{{ f }}</button>
        </div>
      </RevealBlock>

      <div :key="active" class="grid grid-swap">
        <article v-for="p in shown" :key="p.slug" class="card">
          <span class="card-num">{{ p.n }} · {{ p.category }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.description }}</p>
          <div class="chips">
            <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
          </div>
          <p class="links">
            <NuxtLink :to="`/projects/${p.slug}`" class="link">Case study <span class="arrow">→</span></NuxtLink>
            <a v-for="l in p.links" :key="l.label" :href="l.href" class="link">{{ l.label }} <span class="arrow">→</span></a>
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
