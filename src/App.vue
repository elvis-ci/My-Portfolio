<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";

const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div id="app" class="max-w-[1400px] mx-auto relative">
    <Navbar />
    <RouterView />

    <footer class="text-center py-4 bg-background text-text">
      <p>&copy; 2024 Elvis. All rights reserved.</p>
    </footer>

    <!-- Back to top button -->
<!-- <button
  v-if="showBackToTop"
  @click="scrollToTop"
  class="fixed btt bottom-7 right-7 h-10 w-10 flex items-center justify-center shadow-lg bg-btn-bg transition-transform duration-300 hover:rotate-45 focus:outline-none focus:ring-4 focus:ring-accent/50"
>
  <span class="text-white font-extrabold transition-transform duration-300">^</span>
</button> -->
  </div>
</template>

<style scoped>
.btt {
  z-index: 1000;
  border-radius: 10px;
}

.btt:hover > span {
  transform: rotate(-45deg);
}
</style>
