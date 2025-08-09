<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
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
  </header>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
  header {
    width: 100%;
    line-height: 1.5;
    max-height: 100dvh;
    display: flex;
    padding-block: 10px;
  }

  .logo {
    display: block;
    margin: 0 2rem 0 0;
  }

  .navbar-menu{
    display: none;
  }

  nav {
    width: fit-content;
    text-align: center;
    font-size: 1.1rem;
    margin-left: auto !important;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 0.7rem;
    text-decoration: none;
    color: white;
    /* letter-spacing: 1px; */
  }

  nav a:first-of-type {
    border: 0;
  }

  main{
    max-width: 1400px;
    margin: 0px auto;
  }

  /* ========== Breakpoints ========== */

  /* Small & Medium devices (<=768px)*/
  @media (max-width: 768px) {
    nav {
      display: none;
    }

    .navbar-menu{
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 33px;
      position: relative;
      margin-left: auto;
      background-color: transparent;
      width: 30px;
      box-sizing: border-box;
      padding: 8px;
      border: 0px;
    }

    .navbar-menu::before{
      content: '';
      width: 65%;
      align-self: flex-start;
      background-color: white;
      height: 2px;
      position: absolute;
      right: 0px;
    }

    .navbar-menu .btn-line{
      width: 40%;
      background-color: white;
      height: 2px;
      position: absolute;
      right: 0px
    }

    .navbar-menu::after{
      content: '';
      align-self: flex-end;
      background-color: white;
      height: 2px;
      width: 80%;
      position: absolute;
      right: 0px
    }
  }

  @media (min-width: 769px) {
  }

  /* Extra large devices (≥1200px) - Desktops */
  @media (max-width: 1200px) {
  }

  /* Optional: XXL (≥1400px) - Large widescreens */
  @media (min-width: 1400px) {
  }



</style>
