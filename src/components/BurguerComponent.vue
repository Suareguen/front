<template>
  <div class="flex flex-col items-center" @click="changeValue">
    <div class="w-10 h-10 mb-6 bg-white text-black rounded-[20px] flex items-center justify-center">
      <h2>AS</h2>
    </div>
    <div class="flex flex-col items-center cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform"
        :class="{ '-rotate-90': isOpenMenu }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <div v-if="isOpenMenu"
        class="w-full  p-8 mt-2 flex flex-col items-center transition-opacity duration-300 ease-in-out">
        <router-link class="text-xl my-2" :to="{ name: 'home' }">Home</router-link>
        <router-link class="text-xl my-2" :to="{ name: 'students' }">Students</router-link>
        <router-link class="text-xl my-2" :to="{ name: 'labs' }">Labs</router-link>
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
  