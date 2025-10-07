<script>
import { RouterLink } from 'vue-router';
export default {
  name: "navbar",
  data() {
    return {
      isCondensed: false,
    };
  },
  methods: {
    /*Toggle menu*/
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },
  },
}
</script>

<template>
  <div class="nav">
    <img alt="Elvis Logo" class="logo" src=""/>

    <nav id="navigation" class="">
      <RouterLink to="/">About</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
    <button  @click="toggleMenu()" :class="{ open: isCondensed === true }" class="navbar-menu ml-auto" aria-label="Toggle navigation" role="button">
      <span class="btn-line"></span>
    </button>

  </div>
</template>

<style scoped>
  div.nav{
    width: 100%;
    max-width: 1600px;
    display: flex;
    margin: 0px auto;
  }
  
</style>