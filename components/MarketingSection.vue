<script setup lang="ts">
import { marketing } from "~/data/site";

const num = (i: number) => String(i + 1).padStart(2, "0");
</script>

<template>
  <section id="marketing" class="section section-alt">
    <div class="wrap">
      <RevealBlock class="section-head">
        <p class="kicker">How I grow brands</p>
        <h2>Digital Marketing Strategy</h2>
      </RevealBlock>
      <div class="grid">
        <div v-for="(m, i) in marketing" :key="m.title">
          <RevealBlock>
            <div class="card">
              <span class="card-num">{{ num(i) }}</span>
              <h3>{{ m.title }}</h3>
              <p>{{ m.description }}</p>
            </div>
          </RevealBlock>
        </div>
      </div>
    </div>
  </section>
</template>
