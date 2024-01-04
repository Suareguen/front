<template>
  <div
    class="w-full h-screen text-white bg-black flex flex-col justify-center items-center"
  >
    <div class="w-1/2 flex justify-center mb-2">
      <img src="../assets/reboot.png" alt="Reboot Academy" class="w-16 rounded-[8px] object-contain">
    </div>
    <form
      class="w-1/2 bg-gray-800 rounded-[8px] p-8 flex flex-col justify-center items-center"
    >
      <div class="flex flex-row justify-between w-full">
        <label class="text-white"> Email </label>
        <div class="relative max-w-xs">
          <svg
            class="w-6 h-6 text-white absolute left-3 inset-y-0 my-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter your email"
            class="w-full pl-12 pr-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
      </div>
      <Password />
      <div class="w-full mt-4 border border-gray-700" ></div>
      <div class="flex flex-row justify-end w-full mt-4">
        <button
    class="px-4 py-2 text-sm text-white duration-150 bg-green-500 rounded-md hover:bg-indigo-700 active:shadow-lg">
   <router-link :to="{ name: 'home' }">
       LOGIN
   </router-link>
  </button>

      </div>
    </form>
  </div>
</template>

<script>
import Password from "../components/PasswordComponent.vue";
export default {
  name: "LoginView",
  components: {
    Password,
  },
};
</script>

<style lang="scss" scoped></style>
