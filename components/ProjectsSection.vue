<script setup lang="ts">
import { projects } from "~/data/site";

const num = (i: number) => String(i + 1).padStart(2, "0");
</script>

<template>
  <section id="projects" class="section section-alt">
    <div class="wrap">
      <RevealBlock class="section-head">
        <p class="kicker">Selected work</p>
        <h2>Projects</h2>
      </RevealBlock>
      <div class="grid">
        <div v-for="(p, i) in projects" :key="p.title">
          <RevealBlock>
            <article class="card project" :class="`tone-${i % 3}`">
              <div class="project-visual">
                <span class="big-num">{{ num(i) }}</span>
              </div>
              <div class="project-body">
                <h3>{{ p.title }}</h3>
                <p>{{ p.description }}</p>
                <div class="chips">
                  <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
                </div>
                <p class="links">
                  <a v-for="l in p.links" :key="l.label" :href="l.href">{{ l.label }} <span class="arrow">→</span></a>
                </p>
              </div>
            </article>
          </RevealBlock>
        </div>
      </div>
    </div>
  </section>
</template>
