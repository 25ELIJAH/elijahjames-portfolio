<script setup lang="ts">
import { profile } from "~/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#marketing", label: "Marketing" },
];

const scrolled = ref(false);
const onScroll = () => (scrolled.value = window.scrollY > 10);

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="wrap nav">
      <a href="#top" class="logo">{{ profile.name }}</a>
      <nav>
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
        <a href="#contact" class="nav-cta">Contact</a>
      </nav>
    </div>
  </header>
</template>
