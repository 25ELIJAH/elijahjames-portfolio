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
            <article class="card">
              <span class="card-num">{{ num(i) }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.description }}</p>
              <div class="chips">
                <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
              </div>
              <p class="links">
                <a v-for="l in p.links" :key="l.label" :href="l.href">{{ l.label }} →</a>
              </p>
            </article>
          </RevealBlock>
        </div>
      </div>
    </div>
  </section>
</template>
