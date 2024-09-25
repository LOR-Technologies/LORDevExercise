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
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>

    <!-- Form to add a new food item -->
    <form @submit.prevent="addItem">
      <h3>Add New Item</h3>
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="newItem.name" placeholder="Enter name" required />
      </div>
      <div>
        <label for="quantity">Quantity:</label>
        <input id="quantity" v-model.number="newItem.quantity" type="number" placeholder="Enter quantity" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input id="price" v-model.number="newItem.price" type="number" step="0.01" placeholder="Enter price" required />
      </div>
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodItems: [],
      newItem: { name: '', quantity: 0, price: 0 }
    };
  },
  methods: {
    async fetchItems() {
      // Simulated fetch data from backend
      this.foodItems = [
        { id: 1, name: 'Chicken Kota', price: 15.00, ingredients: ['Quarter Loaf', 'French Fries', 'Grilled Chicken', 'Cheese', 'Atchar', 'Tomato Sauce'], colorClass: 'chicken-kota' },
        { id: 2, name: 'Beef Kota', price: 20.00, ingredients: ['Quarter Loaf', 'French Fries', 'Beef Patty', 'Cheese', 'Egg', 'Atchar', 'Mayonnaise'], colorClass: 'beef-kota' },
        { id: 3, name: 'Veggie Kota', price: 12.00, ingredients: ['Quarter Loaf', 'French Fries', 'Grilled Veggies', 'Cheese', 'Tomato Sauce', 'Lettuce'], colorClass: 'veggie-kota' }
      ];
    },
    async addItem() {
      // Simulated add item to the list
      this.newItem.id = this.foodItems.length + 1;
      this.foodItems.push({ ...this.newItem, colorClass: this.determineColorClass() });
      this.newItem = { name: '', quantity: 0, price: 0 };
    },
    async editItem(item) {
      // Placeholder for edit functionality
      console.log('Editing item', item);
    },
    async deleteItem(itemId) {
      // Simulated delete item from list
      this.foodItems = this.foodItems.filter(item => item.id !== itemId);
    },
    determineColorClass() {
      // Determine color class based on newItem properties
      if (this.newItem.name.toLowerCase().includes('chicken')) {
        return 'chicken-kota';
      } else if (this.newItem.name.toLowerCase().includes('beef')) {
        return 'beef-kota';
      } else if (this.newItem.name.toLowerCase().includes('veggie')) {
        return 'veggie-kota';
      } else {
        return '';
      }
    }
  },
  mounted() {
    this.fetchItems(); // Fetch items when component mounts
  }
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
}

.food-name {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.food-details {
  font-size: 1.2rem;
  color: #555;
}

.food-ingredients {
  font-size: 1.1rem;
  margin-top: 0.5rem;
  color: #777;
}

.chicken-kota {
  background-color: #a8d5ba;
}

.beef-kota {
  background-color: #f9b1b0;
}

.veggie-kota {
  background-color: #a3e2f0;
}

form {
  margin-top: 2rem;
}

form div {
  margin-bottom: 1rem;
}

form label {
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

form input[type="text"],
form input[type="number"] {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

form button:hover {
  background-color: #45a049;
}
</style>
