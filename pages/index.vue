<script setup lang="ts">
import { testimonials, posts } from "~/data/site";
</script>

<template>
  <main id="top">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <MarketingSection />
    <TestimonialsSection v-if="testimonials.length" />
    <InsightsSection v-if="posts.length" />
    <ContactSection />
  </main>
</template>
