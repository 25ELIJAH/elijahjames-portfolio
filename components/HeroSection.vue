<script setup lang="ts">
import { profile } from "~/data/site";

const failed = ref(false);
const img = ref<HTMLImageElement | null>(null);
const idx = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

// The image may fail before hydration, so @error never fires; check on mount too.
onMounted(() => {
  if (img.value && img.value.complete && img.value.naturalWidth === 0) failed.value = true;
  timer = setInterval(() => (idx.value = (idx.value + 1) % profile.rotating.length), 2400);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <section class="hero">
    <div class="hero-photo">
      <div v-if="failed" class="photo-fallback">{{ profile.initials }}</div>
      <img
        v-else
        ref="img"
        :src="profile.photo"
        :alt="`Photo of ${profile.name}`"
        @error="failed = true"
      />
      <div class="float-chip chip-a">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
        Software Engineer
      </div>
      <div class="float-chip chip-b">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M7 15l4-4 3 3 5-6"/></svg>
        Digital Marketer
      </div>
    </div>

    <div class="hero-text">
      <span class="watermark" aria-hidden="true">{{ profile.initials }}</span>
      <p class="eyebrow">Portfolio {{ new Date().getFullYear() }}</p>
      <h1>
        Hi, I'm<br />
        <span class="name">{{ profile.name }}</span>
      </h1>
      <p class="role-line">
        <span class="role-static">I'm a</span>
        <Transition name="swap" mode="out-in">
          <span :key="idx" class="role-word">{{ profile.rotating[idx] }}</span>
        </Transition>
      </p>
      <p class="lead">{{ profile.tagline }}</p>
      <div class="actions">
        <a class="btn" href="#projects">View my work</a>
        <a class="btn btn-ghost" href="#contact">Contact me</a>
      </div>
    </div>
  </section>
</template>
