<script setup lang="ts">
import { engineering } from "~/data/site";
</script>

<template>
  <section id="skills" class="wrap section">
    <RevealBlock>
      <h2>Software Engineering</h2>
      <ul class="list">
        <li v-for="s in engineering" :key="s.label">
          <strong>{{ s.label }}:</strong> {{ s.items }}
        </li>
      </ul>
    </RevealBlock>
  </section>
</template>
