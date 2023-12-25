<template>
  <header>
    <div class="wrapper">

      <!-- Navbar -->
      <nav>
        <RouterLink to="/" class="router-link">Home</RouterLink>
        <RouterLink to="/expenses" class="router-link">Expenses</RouterLink>
        <RouterLink to="/income" class="router-link">Income</RouterLink>
      </nav>

      <!-- Component Transitions -->
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>

    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* ROUTE TRANSITIONS */
  .route-enter-from {
    opacity: 0;
    transform: translateX(0px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out; 
  }

  .route-leave-to {
    opacity: 0;
    transform: translateX(800px);
  }

  .route-leave-active {
    transition: all 0.3s ease-in; 
  }
</style>
