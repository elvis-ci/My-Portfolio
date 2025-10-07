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
  <div class="container">
    <div class="row">
      <h2 class="sub-section-title">My Services</h2>
    </div>
    <div class="row">
      <ul class="row">
        <li
          class="col-12 col-md-6 col-lg-4"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="service-item">
            <img
              class="service-icon"
              :src="service.icon"
              :alt="service.name"
              width="40"
              height="40"
            />
            <h3 class="service-title">{{ service.name }}</h3>
            <p class="service-desc">{{ service.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.service-item {
  background-color: var(--card-bg);
  border-bottom: 2px solid var(--color-text);
  /* box-shadow: var(--box-shadow); */
  padding: 38px 35px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  direction: inherit;
  height: 100%;
  border-radius: 12px; /* smoother glow */
}

/* Add hover glow boost */
.service-item:hover {
  box-shadow: var(--box-shadow);
  transform: translateY(-4px);
}
li {
  display: inline-block;
  margin-block: 30px;
}
.service-icon {
  display: inline-block;
  font-size: 58px;
  margin-bottom: 22px;
}
.service-title {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 14px;
  color: var(--btn-bg);
}
.service-desc {
  margin-bottom: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
}
</style>
