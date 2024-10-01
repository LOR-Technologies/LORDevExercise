<template>
  <div class="dashboard">
    <navbar />
    <header>
      <h1>Stock Inventory Dashboard</h1>
    </header>

    <!-- Inventory Section -->
    <section class="inventory">
      <ul>
        <li v-for="item in items" :key="item.id">
          <span>{{ item.name }} - {{ item.quantity }}</span>
          <div class="actions">
            <button @click="editItem(item)">Update</button>
            <button @click="deleteItem(item)" class="delete-btn">Delete</button>
          </div>
        </li>
      </ul>
    </section>

    <!-- Form -->
    <section class="form">
      <h2>{{ isEditing ? 'Update Item' : 'Add New Item' }}</h2>
      <form @submit.prevent="handleSubmit">
        <label for="item-name">Name:</label>
        <input type="text" id="item-name" v-model="form.name" required />

        <label for="item-mass">Mass:</label>
        <input type="number" id="item-mass" v-model="form.mass" />

        <label for="item-quantity">Quantity:</label>
        <input type="number" id="item-quantity" v-model="form.quantity" />

        <label for="item-price">Price:</label>
        <input type="number" id="item-price" v-model="form.price" />

        <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Inventory items, starting with empty array
const items = ref([])
// Data and state management
const form = ref({ name: '', mass: '', quantity: '', price: '' })
const isEditing = ref(false)
const currentItemId = ref(null)
const successMessage = ref('')
const errorMessage = ref('')

// Fetch items from the Hono.js API
const fetchItems = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/ingredients/items`)
    items.value = response.data.items // Set items to the fetched data
  } catch (error) {
    console.error('Error fetching items:', error)
    errorMessage.value = 'Failed to load items'
  }
}

// Call fetchItems when the component is mounted
onMounted(() => {
  fetchItems()
})

const handleSubmit = async () => {
  try {
    if (isEditing.value) {
      // Updating item logic
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/ingredient/updateItem/items/${currentItemId.value}`,
        {
          name: form.value.name,
          mass: form.value.mass,
          quantity: form.value.quantity,
          price: form.value.price
        }
      )

      if (response.data.message === 'Item updated successfully') {
        const index = items.value.findIndex((item) => item.id === currentItemId.value)
        if (index !== -1) {
          items.value[index] = response.data.item
        }
        resetForm()
        successMessage.value = 'Item updated successfully!'
        errorMessage.value = ''
      }
    } else {
      // Adding new item logic
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ingredient/addItem/items`,
        {
          name: form.value.name,
          mass: form.value.mass,
          quantity: form.value.quantity,
          price: form.value.price
        }
      )
      if (response.data.message === 'Item added successfully') {
        items.value.push(response.data.item)
        resetForm()
        successMessage.value = 'Item added successfully!'
        errorMessage.value = ''
      }
    }
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message || 'An error occurred, couldn’t add/update item!'
    successMessage.value = ''
  }
}

// Editing existing item
const editItem = (item) => {
  form.value = { ...item }
  currentItemId.value = item.id
  isEditing.value = true
}

// Deleting item from inventory
const deleteItem = async (item) => {
  if (item.quantity === 0) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/ingredient/deleteItem/items/${item.id}`
      )

      if (response.data.message === 'Item deleted successfully') {
        items.value = items.value.filter((i) => i.id !== item.id)
        successMessage.value = 'Item deleted successfully!'
        errorMessage.value = ''
      }
    } catch (error) {
      errorMessage.value =
        error.response?.data?.message || 'An error occurred, couldn’t delete item!'
      successMessage.value = ''
    }
  } else {
    errorMessage.value = 'Item quantity is not zero, cannot delete!'
    successMessage.value = ''
  }
}

const resetForm = () => {
  form.value = { name: '', mass: '', quantity: '', price: '' }
  isEditing.value = false
  currentItemId.value = null
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: 'Arial', sans-serif;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2.5rem;
  color: #333;
}

.inventory h2,
.form h2 {
  font-size: 1.5rem;
  color: #555;
}

.inventory ul {
  list-style-type: none;
  padding: 0;
}

.inventory li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.inventory li span {
  font-size: 1.1rem;
  color: #333;
}

.actions {
  display: flex;
  gap: 10px;
}

.inventory button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.inventory button:hover {
  background-color: #0056b3;
}

.delete-btn {
  background-color: #cc0e21;
}

.delete-btn:hover {
  background-color: #c82333;
}

.form {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.form label {
  display: block;
  margin: 10px 0 5px;
  font-size: 1rem;
}

.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.form button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.form button:hover {
  background-color: #0056b3;
}
</style>
