<template>
  <div>
    <h2>Users List</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [], // Array to store the list of users
    };
  },
  async created() {
    // Call the fetchAllUsers function when the component is created
    await this.fetchAllUsers();
  },
  methods: {
    async fetchAllUsers() {
      try {
        // Make the API request to fetch users from the backend
        const response = await fetch('http://localhost:3000/users', { method: 'GET'});
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        console.log(data); // Log the users data to the console for debugging
        this.users = data; // Populate the users array with the fetched data
      } catch (error) {
        console.error('Error fetching users:', error); // Handle any errors
      }
    },
  },
};
</script>
