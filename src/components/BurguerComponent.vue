<template>
    <div class="relative" @click="toggleMenu">
      <div class="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 transform transition-transform"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <transition name="slide">
        <div v-if="isOpen" class="absolute top-0 right-0 w-48 mt-2 bg-white shadow-lg">
          <ul class="py-2 px-4">
            <li>
              <router-link to="/" class="text-gray-700 hover:text-blue-500">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-700 hover:text-blue-500">About Us</router-link>
            </li>
          </ul>
        </div>
      </transition>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
  .slide-enter-to, .slide-leave {
    transform: translateX(0);
  }
  </style>
  