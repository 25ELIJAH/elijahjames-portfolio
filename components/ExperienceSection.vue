<script setup lang="ts">
import { experience } from "~/data/site";
</script>

<template>
  <section id="experience" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">Where I've worked</p>
      <h2>Digital Marketing Experience</h2>
    </RevealBlock>

    <ol class="xp-list">
      <li v-for="r in experience" :key="r.company + r.period">
        <RevealBlock>
          <article class="xp">
            <div class="xp-meta">
              <p class="xp-period">{{ r.period }}</p>
              <span v-if="r.current" class="xp-now">Current</span>
            </div>
            <div class="xp-body">
              <h3>{{ r.title }}</h3>
              <p class="xp-company">{{ r.company }}</p>
              <ul class="xp-duties">
                <li v-for="d in r.duties" :key="d">{{ d }}</li>
              </ul>
            </div>
          </article>
        </RevealBlock>
      </li>
    </ol>
  </section>
</template>
