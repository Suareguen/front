<template>
  <div class="h-screen bg-black text-white w-full flex flex-col items-center">
    <button class=" rounded p-2 bg-white text-black mt-2 flex justify-center" @click="getAPiCall">Refresh Data</button> 
    <button class=" rounded p-2 bg-white text-black mt-2 flex justify-center" @click="updatePullRequests">Update and Comment Pull requests</button>
    <select class="text-black mt-2" name="" id="" v-model="select">
      <option v-for="lab in labs.labs" :key="lab._id" :value="lab.title">
        {{ lab.title }}
      </option>
    </select>
    <TableLabsComponent
      v-if="labs.labs && labs.labs.length > 0"
      :labs="labs.labs"
      :select="select"
    />
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
import { getAllStudents } from "../services/students.service"
import TableLabsComponent from "../components/TableLabsComponent.vue"
import { updatePullRequestInDataBase, updatePullrequests } from "../services/github.service";

export default {
  name: "ListLabsView",
  components: {
    TableLabsComponent,
  },
  setup() {
    const labs = ref([])
    const select = ref("LAB-103-js-introduction")
    const value = ref("")

    const fetchStudenstData = async () => {
      const response = await getAllStudents()
      labs.value = response
    }
    const getAPiCall = async () => {
      const result = await updatePullRequestInDataBase("rebootacademy-labs", select.value)
      value.value = result
      labs.value = await getAllStudents()
    }
    const updatePullRequests = async () => {
      await updatePullrequests(select.value)
      labs.value = await getAllStudents()
    }
    onMounted(fetchStudenstData)

    return {
      labs,
      select,
      getAPiCall,
      updatePullRequests
    };
  },
};
</script>
.button {
  border: 1px solid black
}

<style lang="scss" scoped></style>
