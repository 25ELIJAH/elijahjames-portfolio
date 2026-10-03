<script setup lang="ts">
import { profile } from "~/data/site";
</script>

<template>
  <section id="about" class="wrap section">
    <RevealBlock>
      <p class="kicker">About me</p>
      <h2>Code and marketing, together.</h2>
      <p class="about-text">{{ profile.about }}</p>
    </RevealBlock>
  </section>
</template>
