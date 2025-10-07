<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    RouterLink,
    RouterView,
  },
  mounted() {
    const backToTop = document.getElementById("back-to-top");

    // Show/hide button on scroll
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });

    // Scroll to top when clicked
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  },
};
</script>

<template>
  <div id="app">
    <header id="topnav">
      <Navbar />
    </header>
    <RouterView />
    <footer class="text-center py-4">
      <p>&copy; 2024 Elvis. All rights reserved.</p>
    </footer>
    <!-- Back to top -->
    <button
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <span class="icons">^</span>
    </button>
  </div>
</template>

<style>
.fade-in {
  opacity: 0;
  transition: opacity 250ms ease-in;
}

.fade-in.appear {
  opacity: 1;
}
.from-bottom {
  transform: translateY(100px);
  opacity: 0;
  transition: transform 350ms ease-in, opacity 300ms ease-in;
}
.from-bottom.appear {
  transform: translateY(0px);
  opacity: 1;
  transition: transform 350ms ease-in, opacity 300ms ease-in;
}

.back-to-top {
  z-index: 99;
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  height: 40px;
  width: 40px;
  background-color: var(--btn-bg);
  justify-content: center;
  align-items: center;
}

.back-to-top .icons {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.back-to-top:hover {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.back-to-top:hover .icons {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
