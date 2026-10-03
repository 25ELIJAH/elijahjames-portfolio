<script setup lang="ts">
import { profile } from "~/data/site";
</script>

<template>
  <section id="about" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">About me</p>
      <h2>Code and marketing, <em>together.</em></h2>
      <p class="about-text">{{ profile.about }}</p>
    </RevealBlock>

    <div class="duo">
      <RevealBlock>
        <div class="duo-card">
          <div class="icon-box">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
          </div>
          <h3>Software Engineer</h3>
          <p>I design and build fast, clean websites and web apps, from the interface to the API behind it.</p>
        </div>
      </RevealBlock>
      <RevealBlock>
        <div class="duo-card duo-alt">
          <div class="icon-box">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M7 15l4-4 3 3 5-6"/></svg>
          </div>
          <h3>Digital Marketer</h3>
          <p>I plan and run SEO, social and email campaigns that bring in the right visitors and turn them into customers.</p>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
