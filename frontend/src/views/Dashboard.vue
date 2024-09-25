<template>
  <div class="dashboard-container">
    <h1>Welcome, {{ username }}!</h1>
    <p style="color:blue;">This is your dashboard where you can manage your inventory.</p>
    <Inventory />
  </div>
</template>

<script>
import Inventory from '@/components/Inventory.vue';

export default {
  data() {
    return {
      username: 'Chef Name', // Fetch this from actual user data later
    };
  },
  components: {
    Inventory, // Register the Inventory component
  },
};
</script>

<style scoped>
.dashboard-container {
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  margin: 50px auto;
}

h1 {
  color: #333;
}

p {
  color: #666;
}
</style>




  