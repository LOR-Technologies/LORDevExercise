<template>
  <div class="dashboard">
    <h2>Food Inventory</h2>
    <ul>
      <li v-for="item in foodItems" :key="item.id">
        {{ item.name }} - {{ item.quantity }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>
<script>
import { useFoodStore } from '../store';

export default {
  setup() {
    const foodStore = useFoodStore();
    const foodItems = foodStore.foodItems;

    return { foodItems };
  },
};
</script>

