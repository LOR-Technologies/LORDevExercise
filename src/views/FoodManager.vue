<template>
    <div class="food-manager">
      <h1>Manage Food Items</h1>
      
      <!-- Form to Add or Update a Food Item -->
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="foodName">Food Name:</label>
          <input type="text" v-model="foodName" id="foodName" required />
        </div>
  
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" v-model="price" id="price" required />
        </div>
  
        <button type="submit">{{ editIndex === null ? 'Add Food' : 'Update Food' }}</button>
      </form>
  
      <!-- List of Food Items -->
      <h2>Food Items</h2>
      <ul>
        <li v-for="(food, index) in foodItems" :key="index">
          {{ food.name }} - R{{ food.price }}
          <button @click="editFood(index)">Edit</button>
          <button @click="deleteFood(food.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Import Axios for HTTP requests
  
  export default {
    name: 'FoodManager',
    data() {
      return {
        foodName: '',
        price: '',
        foodItems: [], // Initialize as an empty array
        editIndex: null,
        editFoodId: null,
      };
    },
    mounted() {
      // Fetch food items when the component is mounted
      this.fetchFoodItems();
    },
    methods: {
      // Fetch all food items from the server
      async fetchFoodItems() {
        try {
          const response = await axios.get('/api/food-items');
          this.foodItems = response.data;
        } catch (error) {
          console.error('Error fetching food items:', error);
        }
      },
      // Add or update food item
      async handleSubmit() {
        if (this.editIndex === null) {
          // Add new food item
          try {
            await axios.post('/api/food-items', {
              name: this.foodName,
              price: this.price,
            });
            this.fetchFoodItems(); // Refresh the list after adding
          } catch (error) {
            console.error('Error adding food item:', error);
          }
        } else {
          // Update existing food item
          try {
            await axios.put(`/api/food-items/${this.editFoodId}`, {
              name: this.foodName,
              price: this.price,
            });
            this.fetchFoodItems(); // Refresh the list after updating
          } catch (error) {
            console.error('Error updating food item:', error);
          }
        }
  
        this.resetForm();
      },
      // Edit a food item (populate form)
      editFood(index) {
        const food = this.foodItems[index];
        this.foodName = food.name;
        this.price = food.price;
        this.editIndex = index;
        this.editFoodId = food.id; // Store the ID for updating
      },
      // Delete a food item
      async deleteFood(foodId) {
        try {
          await axios.delete(`/api/food-items/${foodId}`);
          this.fetchFoodItems(); // Refresh the list after deleting
        } catch (error) {
          console.error('Error deleting food item:', error);
        }
      },
      // Reset the form after adding/updating
      resetForm() {
        this.foodName = '';
        this.price = '';
        this.editIndex = null;
        this.editFoodId = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .food-manager {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  button {
    margin: 5px;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  