<script setup lang="ts">
import { posts } from "~/data/site";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
</script>

<template>
  <section id="insights" class="section section-alt">
    <div class="wrap">
      <RevealBlock class="section-head">
        <p class="kicker">Insights</p>
        <h2>Notes on marketing and code</h2>
      </RevealBlock>
      <div class="grid">
        <div v-for="p in posts" :key="p.slug">
          <RevealBlock>
            <NuxtLink :to="`/blog/${p.slug}`" class="card post">
              <span class="card-num">{{ fmt(p.date) }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.summary }}</p>
              <span class="link">Read more <span class="arrow">→</span></span>
            </NuxtLink>
          </RevealBlock>
        </div>
      </div>
    </div>
  </section>
</template>
