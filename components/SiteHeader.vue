<script setup lang="ts">
import { profile, testimonials, posts } from "~/data/site";

const links = computed(() => [
  { to: "/#about", label: "About" },
  { to: "/#projects", label: "Projects" },
  { to: "/#skills", label: "Skills" },
  { to: "/#marketing", label: "Marketing" },
  ...(testimonials.length ? [{ to: "/#testimonials", label: "Reviews" }] : []),
  ...(posts.length ? [{ to: "/#insights", label: "Insights" }] : []),
  { to: "/#contact", label: "Contact" },
]);

const scrolled = ref(false);
const open = ref(false);
const theme = ref("light");
const route = useRoute();

const onScroll = () => (scrolled.value = window.scrollY > 10);

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme.value;
  try { localStorage.setItem("theme", theme.value); } catch {}
}

watch(() => route.fullPath, () => (open.value = false));

onMounted(() => {
  theme.value = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header class="site-header" :class="{ scrolled, 'menu-open': open }">
    <div class="wrap nav">
      <NuxtLink to="/" class="logo">{{ profile.name }}</NuxtLink>

      <nav :class="{ open }">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="nav-link" @click="open = false">{{ l.label }}</NuxtLink>
      </nav>

      <div class="nav-tools">
        <button class="icon-btn" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <button class="icon-btn menu-btn" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open">
          <span class="bars" :class="{ open }"><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>
  </header>
</template>
