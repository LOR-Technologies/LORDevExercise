import { defineStore } from 'pinia';

export const useFoodStore = defineStore('food', {
  state: () => ({
    foodItems: [],
  }),
  actions: {
    addFoodItem(item) {
      this.foodItems.push(item);
    },
    updateFoodItem(id, updatedItem) {
      const index = this.foodItems.findIndex(item => item.id === id);
      this.foodItems[index] = updatedItem;
    },
    deleteFoodItem(id) {
      this.foodItems = this.foodItems.filter(item => item.id !== id);
    },
  },
});
