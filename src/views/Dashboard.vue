<template>
  <div class="dashboard-container">
    <h2 class="menu-title">KOTA MENU</h2>
    
    <ul class="food-list">
      <li v-for="item in foodItems" :key="item.id" :class="item.colorClass" class="food-item">
        <h3 class="food-name">{{ item.name }}</h3>
        <p class="food-details">Price: R{{ item.price }}</p>
        <p class="food-ingredients">
          <strong>Ingredients:</strong> {{ item.ingredients.join(', ') }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodItems: [
        {
          id: 1,
          name: 'Chicken Kota',
          price: 15.00,
          ingredients: ['Quarter Loaf', 'French Fries', 'Grilled Chicken', 'Cheese', 'Atchar', 'Tomato Sauce'],
          colorClass: 'chicken-kota'
        },
        {
          id: 2,
          name: 'Beef Kota',
          price: 20.00,
          ingredients: ['Quarter Loaf', 'French Fries', 'Beef Patty', 'Cheese', 'Egg', 'Atchar', 'Mayonnaise'],
          colorClass: 'beef-kota'
        },
        {
          id: 3,
          name: 'Veggie Kota',
          price: 12.00,
          ingredients: ['Quarter Loaf', 'French Fries', 'Grilled Veggies', 'Cheese', 'Tomato Sauce', 'Lettuce'],
          colorClass: 'veggie-kota'
        }
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  margin: 0 auto;
  padding: 4rem;
  max-width: 700px;
  background-color: #a9a7a7;
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
  color: rgb(13, 1, 1);
}

.food-name {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.food-details {
  font-size: 1.2rem;
}

.food-ingredients {
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.chicken-kota {
  background-color: rgb(110, 232, 143);
}

.beef-kota {
  background-color: #ff8a80;
}

.veggie-kota {
  background-color: #61d9e9; 
}
</style>
