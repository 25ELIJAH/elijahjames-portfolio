<script setup lang="ts">
import { profile } from "~/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#marketing", label: "Marketing" },
  { href: "#contact", label: "Contact" },
];
</script>

<template>
  <header class="site-header">
    <div class="wrap nav">
      <a href="#top" class="logo">{{ profile.name }}</a>
      <nav>
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
    </div>
  </header>
</template>
