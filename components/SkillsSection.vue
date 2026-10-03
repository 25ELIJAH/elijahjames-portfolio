<script setup lang="ts">
import { engineering } from "~/data/site";

const split = (s: string) => s.split(",").map((x) => x.trim());
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
            <div class="chips">
              <span v-for="item in split(s.items)" :key="item" class="chip chip-accent">{{ item }}</span>
            </div>
          </div>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
