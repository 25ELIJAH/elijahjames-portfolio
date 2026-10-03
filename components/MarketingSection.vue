<script setup lang="ts">
import { marketing, marketingSteps } from "~/data/site";
</script>

<template>
  <section id="marketing" class="section section-alt">
    <div class="wrap">
      <RevealBlock class="section-head">
        <p class="kicker">How I grow brands</p>
        <h2>Digital Marketing Strategy</h2>
      </RevealBlock>

      <ol class="steps">
        <li v-for="(s, i) in marketingSteps" :key="s.title" class="step">
          <RevealBlock>
            <span class="step-dot">{{ i + 1 }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </RevealBlock>
        </li>
      </ol>

      <div class="grid">
        <div v-for="m in marketing" :key="m.title">
          <RevealBlock>
            <div class="card">
              <h3>{{ m.title }}</h3>
              <p>{{ m.description }}</p>
            </div>
          </RevealBlock>
        </div>
      </div>
    </div>
  </section>
</template>
