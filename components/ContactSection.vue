<script setup lang="ts">
import { contact } from "~/data/site";
</script>

<template>
  <section id="contact" class="section contact-dark">
    <div class="wrap">
      <RevealBlock>
        <p class="kicker">Get in touch</p>
        <h2>Let's work together.</h2>
        <p class="about-text">Have a project or an idea? Send me a message and I'll get back to you.</p>
        <div class="contact-grid">
          <a class="contact-card" :href="`mailto:${contact.email}`">
            <small>Email</small><span>{{ contact.email }}</span>
          </a>
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
