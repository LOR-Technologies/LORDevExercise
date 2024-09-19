<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      // Add your login logic here
      const credentials = {
        username: this.username,
        password: this.password,
      };
      console.log("Logged in with: ", credentials);
    },
  },
};
</script>

<style scoped>
.login-container {
  margin: 0 auto;
  padding: 1rem;
  max-width: 400px;
}
</style>
