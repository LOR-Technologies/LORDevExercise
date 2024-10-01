<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">
        <img src="./assets/vue-logo.png" alt="logo" />
        <h1>Inventory Manager App</h1>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; Kotalicious' Inventory Manager. All rights reserved.</p>
      <ul class="social-links">
        <li><a href="">Instagram</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">TikTok</a></li>
      </ul>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  display: flex;
}
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
  align-items: center;
  margin-right: 10px;
}
.logo img {
  height: 10%;
  width: 10%;
  margin-top: 5px;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 20px;
  padding: 0%;
  margin: 0%;
}

.nav-links a {
  text-decoration: none;
  color: aliceblue;
  font-weight: bold;
}

.nav-links a:hover {
  color: #007bff;
}

.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer p {
  margin: 0;
  font-size: 14px;
}

.social-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin-top: 10px;
}

.social-links li {
  display: inline;
}

.social-links a {
  text-decoration: none;
  color: white;
  font-size: 14px;
}

.social-links a:hover {
  color: #007bff;
}
</style>
