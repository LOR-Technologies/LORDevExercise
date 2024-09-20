<template>
  <div id="App">
  

  <nav class="navbar">
    <div class="navbar-container">
      <a src="">hhh</a>
      <ul class="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.navbar {
  background-color: #007bff;
  padding: 10px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 24px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>

