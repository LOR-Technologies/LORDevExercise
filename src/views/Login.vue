<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    <div class="forgot-password">
      <a href="#" @click.prevent="forgotPassword">Forgot your password?</a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const handleLogin = async () => {
      // Hardcoded credentials for validation (for demo purposes)
      const correctUsername = 'user';
      const correctPassword = 'password123';

      // Check if the entered username and password are correct
      if (username.value === correctUsername && password.value === correctPassword) {
        // Clear the fields and error message after successful login
        username.value = '';
        password.value = '';
        errorMessage.value = '';

        // Navigate to the dashboard
        router.push('/dashboard');
      } else {
        // Show error message if login fails
        errorMessage.value = 'Invalid username or password';
      }
    };

    const forgotPassword = () => {
      // Logic for forgot password action (e.g., redirect or show modal)
      alert("Forgot password functionality to be implemented.");
    };

    return {
      username,
      password,
      handleLogin,
      errorMessage,
      forgotPassword
    };
  }
};
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.forgot-password {
  margin-top: 10px;
  text-align: center;
}
.forgot-password a {
  color: #007bff;
  text-decoration: none;
}
.forgot-password a:hover {
  text-decoration: underline;
}
.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
