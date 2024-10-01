<template>
  <div class="home">
    <div class="background-image">
      <img src="../assets/vue-background.jpeg" alt="Background Image" />
      <navbar />
    </div>

    <div class="overlay"></div>

    <section class="welcome">
      <h1>Welcome to Your Inventory Management App</h1>
      <p>
        Streamline your inventory management with ease. Track, update, and manage your stock
        effortlessly. Ready to get started?
      </p>
      <button class="start-btn">
        <a href="/register">Log In / Register</a>
      </button>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Lobster&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%) blur(2px);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
  z-index: -1;
}

.welcome {
  text-align: center;
  padding: 20px;
  max-width: 800px;
}

.welcome h1 {
  font-family: 'Lobster', cursive;
  font-size: 4rem;
  margin-bottom: 20px;
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.8);
  animation: slideInDown 1.5s ease-out;
}

.welcome p {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 40px auto;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  animation: fadeInUp 1.8s ease-out;
}

.start-btn {
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  background-color: #ff7f50;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(255, 127, 80, 0.3);
  transition:
    background-color 0.3s ease,
    transform 0.2s;
}

.start-btn:hover {
  background-color: #ff6347;
  transform: scale(1.05);
}

.start-btn a {
  color: white;
  text-decoration: none;
}

@keyframes slideInDown {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .welcome h1 {
    font-size: 3rem;
  }

  .welcome p {
    font-size: 1.1rem;
  }

  .start-btn {
    font-size: 1.2rem;
    padding: 12px 30px;
  }
}
</style>
