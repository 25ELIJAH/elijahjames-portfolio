<script setup lang="ts">
import { testimonials } from "~/data/site";
</script>

<template>
  <section id="testimonials" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">Kind words</p>
      <h2>What people say</h2>
    </RevealBlock>
    <div class="grid">
      <div v-for="t in testimonials" :key="t.name">
        <RevealBlock>
          <figure class="card quote">
            <blockquote>“{{ t.quote }}”</blockquote>
            <figcaption><strong>{{ t.name }}</strong><span>{{ t.role }}</span></figcaption>
          </figure>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
