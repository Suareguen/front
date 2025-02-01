<template>
  <div class="flex flex-col items-center">
    <div class="w-10 h-10 mb-6 bg-white text-black rounded-[20px] flex items-center justify-center">
      <h2>AS</h2>
    </div>
    <div class="flex flex-col items-center cursor-pointer">
      <svg @click="changeValue" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform"
        :class="{ '-rotate-90': isOpenMenu }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <div v-if="isOpenMenu"
        class="w-full  p-8 mt-2 flex flex-col items-center transition-opacity duration-300 ease-in-out">
        <router-link class="text-xl my-2" :to="{ name: 'home' }">Home</router-link>
        <router-link class="text-xl my-2" :to="{ name: 'students' }">Students</router-link>
        <router-link class="text-xl my-2" :to="{ name: 'labs' }">
          <div class="flex flex-row justify-center items-center w-full">
            Labs
            <svg @click="changeLabsOpen" :class="{ 'rotate-90': value }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="h-5 w-5 transform transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
      <div v-if="value && labs.length > 0" class="w-full flex flex-col items-center">
        <div v-for="lab in labs" :key="lab._id" class="text-sm my-2">{{ lab.title.slice(0, 7) }}</div>
      </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import { onMounted, ref } from 'vue';
import { getAllLabs } from '../services/labs.services.js'
export default {
  props: {
    isOpenMenu: Boolean,
    updateToggleMenu: Function
  },
  setup(props) {
    const value = ref(false)
    const labs = ref([])
    const changeValue = () => {
      props.updateToggleMenu()
    }

    const changeLabsOpen = () => {
      value.value = !value.value
    }

    const getLabsData = async () => {
      const result = await getAllLabs()
      labs.value = result
    }
    onMounted(getLabsData)
    return {
      changeValue,
      value,
      changeLabsOpen,
      labs
    }
  }
};
</script>
  
<style scoped></style>
  