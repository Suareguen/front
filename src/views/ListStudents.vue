<template>
  <div class="h-screen bg-black text-white w-full flex flex-col items-center">
    <div class="relative mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        :value="input"
        @input="input = $event.target.value"
        class="py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
      />
    </div>
    <select class="text-black mt-2" name="" id="" v-model="select">
      <option value="SCE1">SCE1</option>
      <option value="SCE2">SCE2</option>
    </select>
    <TableComponent
      v-if="students.students && students.students.length > 0"
      :select="select"
      :students="students.students"
      :input="input"
    />
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";
import { getAllStudents } from "../services/students.service";
import { ref, onMounted, computed } from "vue";
export default {
  name: "ListStudents",
  components: {
    TableComponent,
  },
  setup() {
    const students = ref([])
    const select = ref("SCE1")
    const input = ref('')
    const fetchStudenstData = async () => {
      const response = await getAllStudents()
      students.value = response;
    }

    const filteredStudents = computed(() => {
      return students.value.filter((student) =>
        student.name.toLowerCase().includes(input.value.toLowerCase())
      );
    })

    onMounted(fetchStudenstData);
    return {
      students,
      select,
      input,
      filteredStudents
    };
  },
};
</script>

<style lang="scss" scoped></style>
