<template>
  <div class="dashboard-container">
    <h2 class="menu-title">KOTA MENU</h2>

    <!-- List of food items -->
    <ul class="food-list">
      <li v-for="item in foodItems" :key="item.id" :class="item.colorClass" class="food-item">
        <h3 class="food-name">{{ item.name }}</h3>
        <p class="food-details">Price: R{{ item.price.toFixed(2) }}</p>
        <p class="food-ingredients">
          <strong>Ingredients:</strong> {{ item.ingredients.join(', ') }}
        </p>
        <div class="item-actions">
          <button @click="editItem(item)" class="edit-button">Edit</button>
          <button @click="deleteItem(item.id)" class="delete-button">Delete</button>
        </div>
      </li>
    </ul>

    <!-- Form to add a new or edit an existing food item -->
    <form @submit.prevent="handleSubmit">
      <h3 v-if="isEditMode">Edit Food Item</h3>
      <h3 v-else>Add New Food Item</h3>
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="newItem.name" placeholder="Enter name" required />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input id="price" v-model.number="newItem.price" type="number" step="0.01" placeholder="Enter price" required />
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients (comma separated):</label>
        <input id="ingredients" v-model="newItem.ingredients" placeholder="Enter ingredients" required />
      </div>
      <button type="submit" class="submit-button">{{ isEditMode ? 'Update Item' : 'Add Item' }}</button>
      <button v-if="isEditMode" @click="cancelEdit" class="cancel-button">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodItems: [], // Food items fetched from the backend
      newItem: { id: null, name: '', price: 0, ingredients: '' }, // Form for adding/editing food items
      isEditMode: false, // Toggle for edit mode
    };
  },
  methods: {
    // Fetch the food items from the backend (or local data)
    async fetchItems() {
      try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch food items');
        }
        const data = await response.json();
        this.foodItems = data; // Set the fetched data to foodItems
      } catch (error) {
        console.error('Error fetching food items:', error);
        // Fallback local data if API is unavailable
        this.foodItems = [
          {
            id: 1,
            name: 'Chicken Kota',
            price: 15.00,
            ingredients: ['Quarter Loaf', 'French Fries', 'Grilled Chicken', 'Cheese', 'Atchar'],
            colorClass: 'chicken-kota',
          },
          {
            id: 2,
            name: 'Beef Kota',
            price: 20.00,
            ingredients: ['Quarter Loaf', 'French Fries', 'Beef Patty', 'Cheese', 'Egg', 'Atchar'],
            colorClass: 'beef-kota',
          },
          {
            id: 3,
            name: 'Veggie Kota',
            price: 12.00,
            ingredients: ['Quarter Loaf', 'French Fries', 'Grilled Veggies', 'Cheese', 'Lettuce'],
            colorClass: 'veggie-kota',
          }
        ];
      }
    },

    // Add or update a food item
    async handleSubmit() {
      if (this.isEditMode) {
        this.updateItem();
      } else {
        this.addItem();
      }
      this.resetForm();
    },

    // Method to add a new food item
    addItem() {
      this.newItem.id = this.foodItems.length + 1; // Assign a new ID
      const ingredientsArray = this.newItem.ingredients.split(',').map(ing => ing.trim()); // Process ingredients
      this.foodItems.push({ ...this.newItem, ingredients: ingredientsArray, colorClass: this.determineColorClass() }); // Add new item
    },

    // Method to edit an existing food item
    editItem(item) {
      this.newItem = { ...item, ingredients: item.ingredients.join(', ') }; // Pre-fill the form with item data
      this.isEditMode = true; // Switch to edit mode
    },

    // Method to update the item after editing
    updateItem() {
      const index = this.foodItems.findIndex(item => item.id === this.newItem.id);
      const updatedItem = {
        ...this.newItem,
        ingredients: this.newItem.ingredients.split(',').map(ing => ing.trim()), // Process ingredients
        colorClass: this.determineColorClass(),
      };
      if (index !== -1) {
        this.foodItems.splice(index, 1, updatedItem); // Update item in the list
      }
      this.isEditMode = false;
    },

    // Method to delete a food item
    deleteItem(id) {
      this.foodItems = this.foodItems.filter(item => item.id !== id);
    },

    // Cancel edit mode and reset form
    cancelEdit() {
      this.resetForm();
    },

    // Reset form data
    resetForm() {
      this.newItem = { id: null, name: '', price: 0, ingredients: '' };
      this.isEditMode = false;
    },

    // Determine the color class based on item name
    determineColorClass() {
      if (this.newItem.name.toLowerCase().includes('chicken')) {
        return 'chicken-kota';
      } else if (this.newItem.name.toLowerCase().includes('beef')) {
        return 'beef-kota';
      } else if (this.newItem.name.toLowerCase().includes('veggie')) {
        return 'veggie-kota';
      } else {
        return '';
      }
    },
  },
  mounted() {
    this.fetchItems(); // Fetch food items when component is mounted
  },
};
</script>

<style scoped>
.dashboard-container {
  margin: 0 auto;
  padding: 4rem;
  max-width: 700px;
  background-color: #f3f3f3;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
}

.food-list {
  list-style-type: none;
  padding: 0;
}

.food-item {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.food-name {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.food-details {
  font-size: 1.2rem;
  color: #060101;
}

.food-ingredients {
  font-size: 1.1rem;
  margin-top: 0.5rem;
  color: #0f0303;
}

.item-actions {
  margin-top: 1rem;
}

.edit-button, .delete-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1rem;
}

.delete-button {
  background-color: #f44336;
}

.edit-button:hover {
  background-color: #45a049;
}

.delete-button:hover {
  background-color: #e41e1e;
}

form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

form input {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button, .cancel-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size:1rem;
  margin-right: 1rem;
}
.cancel-button {
  background-color: #ccc;
  color: #333;
  padding: 0.5rem 1rem;
  border: none;
  border-radius:4px;
}
</style>