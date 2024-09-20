<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Logo
        </a>
        <a role="button" class="navbar-kota kota" aria-label="menu" aria-expanded="false" @click="toggleNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isNavbarActive }">
        <div class="navbar-start">
          <a class="navbar-item" href="/home">Home</a>
          <a class="navbar-item" href="/about">About</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavbarActive: false
      };
    },
    methods: {
      toggleNavbar() {
        this.isNavbarActive = !this.isNavbarActive;
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #4a4a4a;
    color: #ffffff;
    padding: 1rem;
  }
  
  .navbar-brand .navbar-item {
    color: #ffffff;
    font-weight: bold;
  }
  
  .navbar-burger {
    color: #ffffff;
  }
  
  .navbar-menu {
    background-color: #4a4a4a;
  }
  
  .navbar-start .navbar-item {
    color: #ffffff;
    padding: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .navbar-menu {
      background-color: #4a4a4a;
    }
  
    .navbar-start {
      flex-direction: column;
    }
  }
  </style>
  