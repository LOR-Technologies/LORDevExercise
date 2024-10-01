<template>
  <div class="login-container">
    <h1>Login Here</h1>

    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" placeholder="Enter your username" />
      </div>

      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" placeholder="Enter your email" />
      </div>

      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" placeholder="Enter your password" />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register() {
      // to log form data when the register button is clicked
      console.log({
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      })

      //use fetch to send data
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
