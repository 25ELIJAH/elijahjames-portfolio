<script setup lang="ts">
import { profile } from "~/data/site";
</script>

<template>
  <section id="about" class="wrap section">
    <RevealBlock>
      <h2>About</h2>
      <p class="about-text">{{ profile.about }}</p>
    </RevealBlock>
  </section>
</template>
