<script setup>
import { onMounted } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 1,
      rootMargin: "0px 0px 350px 0px",
    }
  );

  faders.forEach((el) => observer.observe(el));
  sliders.forEach((el) => observer.observe(el));
});
</script>

<template>
  <li :aria-labelledby="'post-title-' + post.id" class="fade-in slide-in list-none">
    <article
      class="flex flex-col h-full bg-card-bg border border-border rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <figure v-if="post.image" class="w-full overflow-hidden">
        <img
          :src="post.image"
          :alt="post.imageAlt || ''"
          class="w-full h-40 object-cover"
        />
      </figure>

      <div class="flex flex-col p-4 flex-grow">
        <h3
          :id="'post-title-' + post.id"
          class="text-base sm:text-lg font-bold text-btn-bg mb-2"
        >
          {{ post.title }}
        </h3>

        <p
          class="text-xs sm:text-sm text-small-text flex items-center flex-wrap"
        >
          <i class="icon ion-md-calendar mr-1"></i>
          Published on {{ post.date }}
          <span class="mx-2">·</span>
        </p>
        <p class="text-xs sm:text-sm text-small-text mb-3 flex items-center flex-wrap">
          <i class="icon ion-md-person mr-1"></i>
          <span class="text-color-text">{{ post.author }}</span>
        </p>

        <p class="text-text/90 mb-4 leading-relaxed text-sm sm:text-base">
          {{ post.excerpt }}
        </p>

        <div
          class="text-xs sm:text-sm mt-auto flex items-center justify-between"
        >
          <span
            class="text-xs sm:text-sm text-text opacity-75"
            aria-hidden="true"
          >
            {{ post.readTime }}
          </span>
          <a
            :href="post.link"
            class="bg-btn-color text-text px-4 py-2 rounded-full border border-btn-bg transition hover:-translate-y-0.5 hover:shadow-lg"
            :aria-label="`Read more about ${post.title}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read full post →
          </a>
        </div>
      </div>
    </article>
  </li>
</template>

<style>
.fade-in {
  opacity: 0;
  transition: opacity 0.8s ease-out;
}
.fade-in.appear {
  opacity: 1;
}
.slide-in {
  transform: translateY(25px);
  transition: transform 0.8s ease-out;
}
.slide-in.appear {
  transform: translateY(0);
}
</style>
