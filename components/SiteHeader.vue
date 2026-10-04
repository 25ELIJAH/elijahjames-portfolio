<script setup lang="ts">
import { profile, testimonials, posts } from "~/data/site";

const links = computed(() => [
  { to: "/#about", label: "About" },
  { to: "/#projects", label: "Projects" },
  { to: "/#skills", label: "Skills" },
  { to: "/#marketing", label: "Marketing" },
  { to: "/#experience", label: "Experience" },
  ...(testimonials.length ? [{ to: "/#testimonials", label: "Reviews" }] : []),
  ...(posts.length ? [{ to: "/#insights", label: "Insights" }] : []),
  { to: "/#contact", label: "Contact" },
]);

const scrolled = ref(false);
const open = ref(false);
const route = useRoute();

const onScroll = () => (scrolled.value = window.scrollY > 10);

watch(() => route.fullPath, () => (open.value = false));

onMounted(() => {
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
        <button class="icon-btn menu-btn" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open">
          <span class="bars" :class="{ open }"><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>
  </header>
</template>
