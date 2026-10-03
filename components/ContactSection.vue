<script setup lang="ts">
import { contact } from "~/data/site";
</script>

<template>
  <section id="contact" class="section contact-dark">
    <div class="wrap">
      <RevealBlock>
        <p class="kicker">Get in touch</p>
        <h2 class="contact-title">Let's build something <em>great.</em></h2>
        <a class="big-mail" :href="`mailto:${contact.email}`">{{ contact.email }} <span class="arrow">↗</span></a>
        <div class="contact-grid">
          <a class="contact-card" :href="`tel:${contact.phoneHref}`">
            <small>Phone</small><span>{{ contact.phone }}</span>
          </a>
          <a class="contact-card" :href="contact.linkedin.href">
            <small>LinkedIn</small><span>{{ contact.linkedin.label }}</span>
          </a>
          <a class="contact-card" :href="contact.github.href">
            <small>GitHub</small><span>{{ contact.github.label }}</span>
          </a>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
