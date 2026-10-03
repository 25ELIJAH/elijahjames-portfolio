<script setup lang="ts">
import { marketing } from "~/data/site";
</script>

<template>
  <section id="marketing" class="section section-alt">
    <div class="wrap">
      <RevealBlock><h2>Digital Marketing Strategy</h2></RevealBlock>
      <div class="grid">
        <RevealBlock v-for="m in marketing" :key="m.title">
          <div class="card">
            <h3>{{ m.title }}</h3>
            <p>{{ m.description }}</p>
          </div>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
