<script setup lang="ts">
import { profile } from "~/data/site";

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
      <div v-if="failed" class="photo-fallback">{{ profile.initials }}</div>
      <img
        v-else
        ref="img"
        :src="profile.photo"
        :alt="`Photo of ${profile.name}`"
        @error="failed = true"
      />
    </div>
    <div class="hero-text">
      <p class="eyebrow">{{ profile.role }}</p>
      <h1>Hi, I'm <span>{{ profile.name }}</span>.</h1>
      <p class="lead">{{ profile.tagline }}</p>
      <div class="actions">
        <a class="btn" href="#projects">View my work</a>
        <a class="btn btn-outline" href="#contact">Contact me</a>
      </div>
      <div class="hero-facts">
        <div><strong>Software Engineering</strong>Web apps &amp; APIs</div>
        <div><strong>Digital Marketing</strong>SEO, ads &amp; growth</div>
      </div>
    </div>
  </section>
</template>
