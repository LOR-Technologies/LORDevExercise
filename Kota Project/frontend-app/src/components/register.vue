<template>
  <div class="register-container">
    <h1>Register Here</h1>

    <p>Already registered? <router-link to="/login">Login</router-link></p>

    <form @submit.prevent="register">
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

      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
        />
      </div>

      <button type="submit">Register</button>
    </form>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match!'
        return
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/create`, {
          name: this.username,
          email: this.email,
          password: this.password
        })

        console.log(response.data)

        if (response.data.message === 'User Created') {
          this.successMessage = 'Registration successful!'
          this.errorMessage = ''
          // Clear form
          this.username = ''
          this.email = ''
          this.password = ''
          this.confirmPassword = ''
        }
      } catch (error) {
        this.errorMessage =
          error.response?.data?.message || 'An error occurred during registration!'
        this.successMessage = ''
      }
    }
  }
}
</script>

<style scoped>
.register-container {
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
