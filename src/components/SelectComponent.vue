<template>
  <div class="relative max-w-xs mx-auto mt-12">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
      viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd" />
    </svg>
    <select 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
      <option v-for="lab in labs" :key="lab._id" :value="lab.title">
        {{ lab.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    labs: Array,
    update: Function,
    modelValue: String
  },
    emits: ['update:modelValue']
}
</script>