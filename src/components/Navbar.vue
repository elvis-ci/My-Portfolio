<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="nav">
    <img alt="Elvis Logo" class="logo" src=""/>

    <button class="navbar-menu ml-auto" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" role="button">
      <span class="btn-line"></span>
    </button>

    <nav id="navbarSupportedContent" class="">
      <RouterLink to="/">About</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

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