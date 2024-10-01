// import { defineStore } from 'pinia';

// export const useKotaStore = defineStore('kota', {
//   state: () => ({
//     kotaItems: [],
//   }),
//   actions: {
//     addKotaItem(item) {
//       this.kotaItems.push(item);
//     },
//     updateKotaItem(id, updatedItem) {
//       const index = this.kotaItems.findIndex(item => item.id === id);
//       if (index !== -1) {
//         this.kotaItems[index] = updatedItem;
//       }
//     },
//     deleteKotaItem(id) {
//       this.kotaItems = this.kotaItems.filter(item => item.id !== id);
//     },
//   },
// });


// /*defineStore: Used to create a new Pinia store.
// state(): A function that returns an initial state, which is reactive and shared across components.
// foodItems: Holds the list of food items in the store.
// actions: Methods to manipulate the state:
// addFoodItem: Adds a new item to the foodItems array.
// updateFoodItem: Finds and updates a specific item in the array based on its id.
// deleteFoodItem: Removes an item from the foodItems array based on its id.*/