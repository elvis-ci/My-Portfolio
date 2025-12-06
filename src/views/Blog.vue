<script setup>
import { ref } from "vue";
import BlogArticle from "@/components/BlogArticle.vue";

import leftbehind from "@/assets/imgs/thumbnails/left-behind.jpg";
import barriersToBridges from "@/assets/imgs/thumbnails/barriers-to-bridges.png";
import anvaya from "@/assets/imgs/thumbnails/anvaya.jpg";

const loading = ref(true);

// Fake loading delay (replace with API call)
setTimeout(() => {
  loading.value = false;
}, 1200);

const posts = ref([
  {
    id: 1,
    title: "Left Behind Online: WCAG Compliance and Nigeria’s Digital Divide",
    date: "Jun 14, 2025",
    author: "Elvis Izuegbu",
    excerpt:
      "As Nigeria embraces rapid digital transformation, accessibility remains a neglected priority.",
    image: leftbehind,
    imageAlt: "Image of a woman struggling to read text on a screen",
    link: "https://www.linkedin.com/pulse/left-behind-online-wcag-compliance-nigerias-digital-divide-izuegbu-rnm4f",
    readTime: "4 min read",
  },
  {
    id: 2,
    title:
      "From Barriers to Bridges: A Developer’s Guide to Accessibility in Web Development",
    date: "Jun 27, 2025",
    author: "Elvis Izuegbu",
    excerpt:
      "Over 96% of the world's top one million web pages have an average of 50.8 errors per homepage.",
    image: barriersToBridges,
    imageAlt: "Image of the four principles of accessibility",
    link: "https://www.linkedin.com/pulse/from-barriers-bridges-developers-guide-accessibility-web-izuegbu-vwmqf",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Reflecting on My Internship Journey at Anvaya Feats",
    date: "Aug 22, 2025",
    author: "Elvis Izuegbu",
    excerpt:
      "My favorite thing about Anvaya Feats is the genuine commitment to inclusion, creativity, and impact.",
    image: anvaya,
    imageAlt: "Image with text: Anvaya Feats",
    link: "https://www.linkedin.com/pulse/reflecting-my-internship-journey-anvaya-feats-elvis-izuegbu-w1hjf",
    readTime: "5 min read",
  },
]);

const categories = ref(["Accessibility", "Frontend", "Performance", "Tools"]);
const tags = ref(["WCAG", "Vue.js", "SEO", "Axe", "Performance"]);
</script>

<template>
  <main id="main-content" class="px-4 py-10 max-w-7xl mx-auto text-text">
    <!-- HEADER -->
    <section class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-heading">My Blog</h1>
      <p class="text-base sm:text-lg text-color-text mt-4 max-w-2xl mx-auto">
        Thoughts on web development, accessibility, and practical guides.
        Short reads and deep dives to help teams build better experiences.
      </p>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">
      <!-- BLOG POSTS -->
      <section class="lg:col-span-3">
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Skeleton Loading -->
          <template v-if="loading">
            <li v-for="n in 6" :key="n" class="animate-pulse">
              <div class="flex flex-col h-full bg-card-bg border border-border rounded-xl p-4 space-y-2">
                <div class="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                <div class="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                <div class="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                <div class="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                <div class="mt-auto flex justify-between">
                  <div class="h-8 w-24 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div class="h-3 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
                </div>
              </div>
            </li>
          </template>

          <!-- Actual posts -->
          <template v-else>
            <BlogArticle v-for="post in posts" :key="post.id" :post="post" />
          </template>

        </ul>

        <!-- PAGINATION -->
        <nav aria-label="pagination" class="mt-10 flex justify-center gap-2">
          <button
            class="px-4 py-2 border rounded-lg text-gray-500 bg-gray-100 cursor-not-allowed"
            aria-disabled="true"
          >
            ‹ Prev
          </button>

          <button
            class="px-4 py-1 border rounded-lg bg-btn-bg/70 text-white font-semibold"
          >
            1
          </button>

          <button class="px-4 py-2 border rounded-lg hover:bg-gray-100">
            2
          </button>

          <button class="px-4 py-2 border rounded-lg hover:bg-gray-100">
            Next ›
          </button>
        </nav>
      </section>

      <!-- SIDEBAR -->
      <aside class="lg:col-span-1 space-y-6">
        <!-- Categories -->
        <div class="rounded-xl border p-5 bg-card-bg">
          <h3 class="text-xl font-bold text-heading mb-4">Categories</h3>
          <ul class="space-y-2">
            <li v-for="(cat, i) in categories" :key="i">
              <a :href="'#' + cat" class="text-btn-bg hover:underline">
                {{ cat }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Tags -->
        <div class="rounded-xl border p-5 bg-card-bg">
          <h3 class="text-xl font-bold text-heading mb-4">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tag in tags"
              :key="tag"
              class="px-3 py-1 bg-btn-bg/10 text-btn-bg rounded-full text-xs sm:text-sm font-medium border border-btn-bg/20"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- About -->
        <div class="rounded-xl border p-5 bg-card-bg">
          <h3 class="text-xl font-bold text-heading mb-4">About</h3>
          <p class="text-color-text mb-3">
            I'm Elvis — a web developer and accessibility specialist.
          </p>
          <router-link to="/" class="text-btn-bg hover:underline">
            Read my full bio →
          </router-link>
        </div>
      </aside>
    </div>
  </main>
</template>

<style scoped>
/* Fade-in animation */
.fade-in {
  opacity: 0;
  transition: opacity 0.8s ease-out;
}
.fade-in.appear {
  opacity: 1;
}

/* Slide-in animation */
.slide-in {
  transform: translateY(25px);
  transition: transform 0.8s ease-out;
}
.slide-in.appear {
  transform: translateY(0);
}
</style>
