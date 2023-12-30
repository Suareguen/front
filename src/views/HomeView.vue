<template>
  <div class="home">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold underline">
        Home
      </h1>
      <BurguerComponent />
    </div>
  </div>
</template>

<script>
import BurguerComponent from '@/components/BurguerComponent.vue';

export default {
    name: 'HomeView',
    components: { BurguerComponent }
}
</script>
