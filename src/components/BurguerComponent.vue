<template>
  <div class="relative" @click="changeValue">
    <div class="flex flex-col items-center cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform"
        :class="{ '-rotate-90': isOpenMenu }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <div v-if="isOpenMenu"
        class="w-full h-full p-8 mt-2 bg-white shadow-lg flex flex-col items-center transition-opacity duration-300 ease-in-out">
        <button>
          <router-link to="/">Home</router-link>
        </button>
        <button>
          <router-link to="/about">About</router-link>
        </button>
        <button>
          <router-link :to="{ name: 'students' }">Students</router-link>
        </button>
        <button>
          <router-link :to="{ name: 'labs' }">Labs</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    isOpenMenu: Boolean,
    updateToggleMenu: Function
  },
  setup(props) {
    const changeValue = () => {
      props.updateToggleMenu()
    }
    return {
      changeValue
    }
  }
};
</script>
  
<style scoped></style>
  