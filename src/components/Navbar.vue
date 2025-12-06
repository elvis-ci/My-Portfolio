<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isCondensed = ref(false);

const toggleMenu = () => {
  isCondensed.value = !isCondensed.value;
};

const navLinks = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <header id="topnav" class="relative md:sticky top-0 z-999 w-full bg-background">
    <div class="w-full p-2 md:p-4 sm:p-0 flex justify-between">
      <img alt="Elvis Logo" class="" src=""/>

      <!-- Desktop Nav -->
      <nav id="navigation" class="ml-auto hidden md:flex text-center space-x-4">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="px-2 font-bold text-[1.1rem]"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        aria-label="Toggle navigation"
        class="ml-auto md:hidden relative w-8 h-8 flex items-center justify-end"
      >
        <span
          class="absolute top-2 right-0 w-1/2 h-1/12 bg-text"
        ></span>
        <span
          class="absolute right-0 w-2/5 h-1/12 bg-text"
        ></span>
        <span
          class="absolute bottom-2 right-0 w-[80%] h-1/14 bg-text"
        ></span>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <nav
      v-show="isCondensed"
      class="absolute top-full w-full right-0 md:hidden flex flex-col  space-y-1 backdrop-blur-sm bg-background/30"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="'m-' + link.path"
        :to="link.path"
        class="py-2 px-2 font-bold w-full"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>

a {
  color: var(--color-text);
  transition: color 0.3s;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.router-link-active {
  text-decoration: underline;
  color: var(--color-nav-active);
  text-underline-offset: 4px;
}

.router-link-active:focus {
  text-decoration: none;
}
</style>