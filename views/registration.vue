<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleRegister() {
      // Add your registration logic here
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      console.log("User registered: ", user);
    },
  },
};
</script>

<style scoped>
.register-container {
  margin: 0 auto;
  padding: 1rem;
  max-width: 400px;
}
</style>
