<script setup lang="ts">
import { experience } from "~/data/site";

// Group roles by year, keeping the data order (most recent first).
const groups = computed(() => {
  const map = new Map<string, typeof experience>();
  for (const r of experience) {
    if (!map.has(r.year)) map.set(r.year, []);
    map.get(r.year)!.push(r);
  }
  return [...map.entries()].map(([year, roles]) => ({ year, roles }));
});

// Initials shown when a company has no logo file.
const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
</script>

<template>
  <section id="experience" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">Where I've worked</p>
      <h2>Experience</h2>
    </RevealBlock>

    <div v-for="g in groups" :key="g.year" class="xp-group">
      <RevealBlock class="xp-year-wrap">
        <p class="xp-year">{{ g.year }}</p>
      </RevealBlock>
      <ol class="xp-list">
        <li v-for="r in g.roles" :key="r.company + r.period">
          <RevealBlock>
            <article class="xp">
              <div class="xp-meta">
                <p class="xp-period">{{ r.period }}</p>
                <span v-if="r.current" class="xp-now">Current</span>
              </div>
              <div class="xp-body">
                <div class="xp-head">
                  <img v-if="r.logo" class="xp-logo" :src="r.logo" :alt="`${r.company} logo`" width="48" height="48" loading="lazy" />
                  <span v-else class="xp-logo xp-initials" aria-hidden="true">{{ initials(r.company) }}</span>
                  <div>
                    <h3>{{ r.title }}</h3>
                    <p class="xp-company">{{ r.company }}</p>
                  </div>
                </div>
                <ul class="xp-duties">
                  <li v-for="d in r.duties" :key="d">{{ d }}</li>
                </ul>
              </div>
            </article>
          </RevealBlock>
        </li>
      </ol>
    </div>
  </section>
</template>
