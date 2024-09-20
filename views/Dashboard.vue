<template>
  <div class="dashboard-container">
    <h2>Food Inventory Dashboard</h2>
    <ul>
      <li v-for="item in foodItems" :key="item.id">
        {{ item.name }} - {{ item.quantity }} units - R{{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodItems: [
        { id: 1, name: 'Chicken Kota', quantity: 50, price: 5.00 },
        { id: 2, name: 'Beef Kota', quantity: 30, price: 6.50 },
        { id: 3, name: 'Veggie Kota', quantity: 70, price: 4.00 },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  margin: 0 auto;
  padding: 1rem;
  max-width: 600px;
}
</style>
