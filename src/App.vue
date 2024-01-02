<template>
  <div class="flex flex-row h-screen ">
    <nav class=" bg-blue-500">
      <BurguerComponent :updateToggleMenu="toggleMenu" :isOpenMenu="isOpen" />
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
  color: #2c3e50;
}

nav {
  padding: 30px;
 a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}</style>
