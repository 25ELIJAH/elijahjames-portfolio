<script setup lang="ts">
import { contact } from "~/data/site";
</script>

<template>
  <section id="contact" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">Contact</p>
      <h2>Let's work together</h2>
      <p class="about-text">Have a project or an idea? Get in touch.</p>
    </RevealBlock>
    <RevealBlock>
      <ul class="contact-list">
        <li><span>Email</span><a class="link" :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
        <li><span>Phone</span><a class="link" :href="`tel:${contact.phoneHref}`">{{ contact.phone }}</a></li>
        <li><span>LinkedIn</span><a class="link" :href="contact.linkedin.href">{{ contact.linkedin.label }}</a></li>
        <li><span>GitHub</span><a class="link" :href="contact.github.href">{{ contact.github.label }}</a></li>
      </ul>
    </RevealBlock>
  </section>
</template>
