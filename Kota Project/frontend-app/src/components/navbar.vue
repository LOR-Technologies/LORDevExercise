<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="./assets/logo.png" alt="logo" />
      <h1>Inventory Manager App</h1>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Register</router-link>
      </li>
      <li>
        <router-link to="/">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup></script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.logo {
  display: flex;
  margin-right: 10px;
}

.nav-links li {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.nav-links a:hover {
  color: #007bff;
}
</style>
