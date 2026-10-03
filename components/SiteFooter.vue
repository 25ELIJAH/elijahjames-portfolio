<script setup lang="ts">
import { profile } from "~/data/site";
const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">© {{ year }} {{ profile.name }}</div>
  </footer>
</template>
