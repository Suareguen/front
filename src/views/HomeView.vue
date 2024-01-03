<template>
  <div class=" bg-black w-full">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <img src="../assets/logo2.png" alt="Reboot Academy" class="w-full h-full object-contain">
      <footer class="w-full p-4 flex flex-row justify-around">
        <div class="flex flex-col justify-center">
          <p class="text-white">© 2024 Reboot Academy</p>
          <p class="text-white">All rights reserved</p>
          <p class="text-white">Powered by Reboot Academy</p>
          <p class="text-white">Version 1.0.0</p>
          <p class="text-white">Developed by Reboot Academy</p>
        </div>
        <div class="flex items-center">
          <img class="rounded-[50px] w-1/3" src="../assets/reboot.png" alt="">
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo2.png'
export default {
  name: 'HomeView',
  data() {
    return {
      logo
    }
  }
}
</script>

<style scoped>
</style>
