<script setup lang="ts">
import { profile } from "~/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#marketing", label: "Marketing" },
];

const scrolled = ref(false);
const progress = ref(0);
const theme = ref("light");

const onScroll = () => {
  scrolled.value = window.scrollY > 10;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? (window.scrollY / max) * 100 : 0;
};

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme.value;
  try { localStorage.setItem("theme", theme.value); } catch {}
}

onMounted(() => {
  theme.value = document.documentElement.dataset.theme || "light";
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="progress" :style="{ width: progress + '%' }"></div>
    <div class="wrap nav">
      <a href="#top" class="logo">{{ profile.name }}</a>
      <nav>
        <a v-for="l in links" :key="l.href" :href="l.href" class="nav-link">{{ l.label }}</a>
        <button class="theme-btn" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <a href="#contact" class="nav-cta">Contact</a>
      </nav>
    </div>
  </header>
</template>
