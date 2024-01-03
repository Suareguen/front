<template>
  <div class="flex flex-row h-full ">
    <nav class="h-auto bg-blue-500 text-white flex flex-col justify-between">
      <BurguerComponent :updateToggleMenu="toggleMenu" :isOpenMenu="isOpen" />
      <button v-if="isOpen" class="border border-black rounded p-2 bg-black sticky bottom-4">Logout</button>
      <button v-else class="rounded p-2 bg-black flex justify-center sticky bottom-4">
        <span class="material-symbols-outlined">
          logout
        </span>
      </button>
    </nav>
    <router-view />
  </div>
</template>
<script>
import BurguerComponent from './components/BurguerComponent.vue'
import { ref } from 'vue'
export default {
  components: { BurguerComponent },
  setup() {
    const isOpen = ref(false)
    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      toggleMenu
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
