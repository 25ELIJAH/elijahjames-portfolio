<script setup lang="ts">
const el = ref<HTMLElement | null>(null);
const visible = ref(false);
let io: IntersectionObserver | undefined;

onMounted(() => {
  if (!el.value) return;
  io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        io?.disconnect();
      }
    },
    { threshold: 0.12 }
  );
  io.observe(el.value);
});

onBeforeUnmount(() => io?.disconnect());
</script>

<template>
  <div ref="el" class="reveal" :class="{ visible }">
    <slot />
  </div>
</template>
