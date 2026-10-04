<script setup lang="ts">
import { profile, settings } from "~/data/site";

const failed = ref(false);
const img = ref<HTMLImageElement | null>(null);

// The image may fail before hydration, so @error never fires; check on mount too.
onMounted(() => {
  if (img.value && img.value.complete && img.value.naturalWidth === 0) failed.value = true;
});
</script>

<template>
  <section class="hero">
    <div class="hero-photo">
      <div class="photo-frame">
        <div class="photo-clip">
          <div v-if="failed" class="photo-fallback">{{ profile.initials }}</div>
          <img
            v-else
            ref="img"
            :src="profile.photo"
            :alt="`Portrait of ${profile.name}`"
            decoding="async"
            fetchpriority="high"
            @error="failed = true"
          />
        </div>
      </div>
    </div>

    <div class="hero-text">
      <p class="hello">Hello, I'm</p>
      <h1>{{ profile.name }}</h1>
      <p class="role-line">
        <span class="role-static">I'm a</span>
        <TypeWriter :words="profile.rotating" />
      </p>
      <p class="lead">{{ profile.tagline }}</p>
      <div class="actions">
        <a class="btn" href="#projects">View my work</a>
        <a class="btn btn-outline" href="#contact">Contact me</a>
        <a v-if="settings.cv" class="btn btn-outline" :href="settings.cv" download>Download CV</a>
      </div>
      <div class="hero-social-row">
        <SocialLinks />
        <a v-if="settings.bookingUrl" class="link" :href="settings.bookingUrl" target="_blank" rel="noopener">Book a call <span class="arrow">→</span></a>
      </div>
    </div>
  </section>
</template>
