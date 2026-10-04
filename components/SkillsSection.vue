<script setup lang="ts">
import { engineering } from "~/data/site";
</script>

<template>
  <section id="skills" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">What I work with</p>
      <h2>Software Engineering</h2>
    </RevealBlock>
    <div class="skill-grid">
      <div v-for="s in engineering" :key="s.label">
        <RevealBlock>
          <div class="skill-card">
            <h3>{{ s.label }}</h3>
            <ul class="tools">
              <li v-for="t in s.items" :key="t.name" class="tool">
                <img :src="`/icons/${t.icon}.svg`" :alt="t.name" width="34" height="34" loading="lazy" />
                <span>{{ t.name }}</span>
              </li>
            </ul>
          </div>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
