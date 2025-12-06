<script setup>
import { ref } from "vue";

/* ---------------------------------------------------
   PROJECTS DATA
--------------------------------------------------- */
const projects = ref([
  {
    title: "Shifting Perspective",
    category: "Studio",
    client: "Calvin Carlo",
    date: "13th August, 2019",
    image: "", // Add project image URL
    link: "/page-portfolio-detail",
  },
  {
    title: "Colors Magazine",
    category: "Web Design",
    client: "Calvin Carlo",
    date: "13th August, 2019",
    image: "",
    link: "/page-portfolio-detail",
  },
  {
    title: "Spa Cosmetics",
    category: "Developing",
    client: "Calvin Carlo",
    date: "13th August, 2019",
    image: "",
    link: "/page-portfolio-detail",
  },
  {
    title: "Riser Coffee",
    category: "Branding",
    client: "Calvin Carlo",
    date: "13th August, 2019",
    image: "",
    link: "/page-portfolio-detail",
  },
  {
    title: "Dancing With Myself",
    category: "Photography",
    client: "Calvin Carlo",
    date: "13th August, 2019",
    image: "",
    link: "/page-portfolio-detail",
  },
  {
    title: "New trends in SEO",
    category: "Business",
    client: "Calvin Carlo",
    date: "13th August, 2019",
    image: "",
    link: "/page-portfolio-detail",
  },
]);
</script>

<template>
  <main id="main-content" class="px-4 py-10 max-w-7xl mx-auto text-text">
    <!-- Header -->
    <section class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-heading">My Projects</h1>
      <p class="text-base sm:text-lg text-color-text mt-4 max-w-2xl mx-auto">
        Explore a snapshot of my journey as a Web Developer and Accessibility
        Specialist, highlighting my experience and the skills that drive my work
        in creating inclusive, high-quality digital experiences.
      </p>
    </section>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="relative overflow-hidden rounded-xl shadow-lg group"
      >
        <!-- Project Image -->
        <img
          :src="project.image"
          alt="project image"
          class="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-xl"
        >
          <router-link
            :to="project.link"
            class="text-white font-bold text-lg hover:underline"
          >
            {{ project.title }}
          </router-link>
          <small class="text-gray-200">{{ project.category }}</small>

          <div class="mt-2 text-gray-300 text-sm flex justify-between">
            <span><i class="mdi mdi-account"></i> {{ project.client }}</span>
            <span
              ><i class="mdi mdi-calendar-check"></i> {{ project.date }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-8 flex justify-center">
      <nav class="inline-flex rounded-md shadow-sm" aria-label="Pagination">
        <a
          href="#"
          class="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        >
          Prev
        </a>
        <a
          href="#"
          class="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        >
          1
        </a>
        <a
          href="#"
          class="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        >
          2
        </a>
        <a
          href="#"
          class="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        >
          3
        </a>
        <a
          href="#"
          class="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        >
          Next
        </a>
      </nav>
    </div>
  </main>
</template>
