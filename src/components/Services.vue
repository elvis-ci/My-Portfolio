<script>
export default {
  name: "Services",
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <!-- Title -->
    <h2
      class="text-2xl md:text-3xl font-bold text-text mb-6 flex items-center gap-2"
    >
      <i class="icon ion-ios-globe text-btn-bg"></i>
      My Services
    </h2>

    <!-- Services Grid -->
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <li v-for="(service, index) in services" :key="index" class="flex">
        <div
          class="bg-card-bg border-b-2 border-text rounded-xl py-5 px-4 md:p-9 w-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-glow shadow-sm"
        >
          <!-- Icon -->
          <img
            :src="service.icon"
            :alt="service.name"
            width="40"
            height="40"
            class="mb-6 inline-block"
          />

          <!-- Title -->
          <h3
            class="text-xl sm:text-2xl font-bold tracking-tight text-btn-bg mb-3"
          >
            {{ service.name }}
          </h3>

          <!-- Description -->
          <p
            class="text-text break-words text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {{ service.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Restore the multi-layer glow using your palette variables */
.shadow-glow {
  /* keep a subtle base shadow for non-hover */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

/* On hover, apply the stronger multi-layer glow */
li .hover\:shadow-glow:hover,
.shadow-glow:hover {
  box-shadow: 0 0 3px var(--color-box-shadow-layer1, rgba(127, 251, 203, 0.8)),
    0 0 6px var(--color-box-shadow-layer2, rgba(127, 251, 191, 0.6)),
    0 0 10px var(--color-box-shadow-layer3, rgba(127, 251, 193, 0.5));
}
</style>
