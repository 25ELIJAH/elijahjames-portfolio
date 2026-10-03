<script setup lang="ts">
const props = defineProps<{ words: string[] }>();

const text = ref("");
let wordIdx = 0;
let charIdx = 0;
let deleting = false;
let timer: ReturnType<typeof setTimeout> | undefined;

function tick() {
  const word = props.words[wordIdx];
  let delay = 85;

  if (!deleting) {
    charIdx++;
    text.value = word.slice(0, charIdx);
    if (charIdx === word.length) {
      deleting = true;
      delay = 1600; // pause on the finished word
    }
  } else {
    charIdx--;
    text.value = word.slice(0, charIdx);
    delay = 45;
    if (charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % props.words.length;
      delay = 350;
    }
  }
  timer = setTimeout(tick, delay);
}

onMounted(() => {
  timer = setTimeout(tick, 600);
});
onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <span class="typewriter">{{ text }}<span class="caret" aria-hidden="true"></span></span>
</template>
