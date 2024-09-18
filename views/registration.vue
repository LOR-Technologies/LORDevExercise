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

<style scoped>
.register-container {
  margin: 0 auto;
  padding: 1rem;
  max-width: 400px;
}
</style>