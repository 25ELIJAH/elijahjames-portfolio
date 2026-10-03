<script setup lang="ts">
import { marqueeWords } from "~/data/site";
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <template v-for="n in 2" :key="n">
        <span v-for="w in marqueeWords" :key="`${n}-${w}`" class="marquee-item">{{ w }}</span>
      </template>
    </div>
  </div>
</template>
