<script setup lang="ts">
import { posts, settings } from "~/data/site";

const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);
if (!post) throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true });

useHead({
  title: `${post.title} | Elijah James`,
  meta: [
    { name: "description", content: post.summary },
    { property: "og:title", content: `${post.title} | Elijah James` },
    { property: "og:description", content: post.summary },
  ],
  link: [{ rel: "canonical", href: `${settings.siteUrl}/blog/${post.slug}` }],
});

const date = new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
</script>

<template>
  <main class="page">
    <article class="wrap narrow">
      <NuxtLink to="/#insights" class="link back"><span class="arrow back-arrow">←</span> All insights</NuxtLink>
      <p class="kicker">{{ date }}</p>
      <h1 class="page-title">{{ post.title }}</h1>
      <p class="about-text">{{ post.summary }}</p>
      <div class="prose">
        <p v-for="(para, i) in post.body" :key="i">{{ para }}</p>
      </div>
    </article>
  </main>
</template>
