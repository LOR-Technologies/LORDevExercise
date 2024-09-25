<template>
    <div class="inventory">
      <h2>Inventory Management</h2>
      <form @submit.prevent="addItem">
        <input v-model="itemName" placeholder="Item Name" required />
        <input v-model.number="itemQuantity" type="number" placeholder="Quantity" required />
        <button type="submit">Add Item</button>
      </form>
  
      <h3>Inventory List</h3>
      <ul>
        <li v-for="(item, index) in inventory" :key="index">
          {{ item.name }} - Quantity: {{ item.quantity }}
          <button @click="subtractItem(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        itemName: '',
        itemQuantity: 0,
        inventory: JSON.parse(localStorage.getItem('inventory')) || [],
      };
    },
    methods: {
      addItem() {
        if (this.itemName && this.itemQuantity > 0) {
          const existingItem = this.inventory.find(item => item.name === this.itemName);
          if (existingItem) {
            existingItem.quantity += this.itemQuantity; // Increase existing item's quantity
          } else {
            this.inventory.push({ name: this.itemName, quantity: this.itemQuantity }); // Add new item
          }
          this.updateInventory();
          this.itemName = '';
          this.itemQuantity = 0;
        }
      },
      subtractItem(index) {
        if (this.inventory[index].quantity > 1) {
          this.inventory[index].quantity -= 1; // Decrease item quantity
        } else {
          this.inventory.splice(index, 1); // Remove item if quantity is 0
        }
        this.updateInventory();
      },
      updateInventory() {
        localStorage.setItem('inventory', JSON.stringify(this.inventory)); // Save inventory to localStorage
      },
    },
  };
  </script>
  
  <style scoped>
  .inventory {
    margin: 2rem 0;
  }
  
  .inventory form {
    margin-bottom: 1rem;
  }
  
  .inventory input {
    margin-right: 1rem;
  }
  </style>
  
  