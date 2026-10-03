<script setup lang="ts">
import { profile } from "~/data/site";
</script>

<template>
  <section id="about" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">About</p>
      <h2>Code and marketing, together</h2>
      <p class="about-text">{{ profile.about }}</p>
    </RevealBlock>

    <div class="duo">
      <RevealBlock>
        <div class="card">
          <h3>Software Engineer</h3>
          <p>I design and build fast, clean websites and web apps, from the interface to the API behind it.</p>
        </div>
      </RevealBlock>
      <RevealBlock>
        <div class="card">
          <h3>Digital Marketer</h3>
          <p>I plan and run SEO, social and email campaigns that bring in the right visitors and turn them into customers.</p>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
