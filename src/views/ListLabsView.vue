<template>
  <div>
    <button @click="getAPiCall">Refresh Data</button>
    <h1>List Labs</h1>
    <select name="" id="" v-model="select">
      <option v-for="lab in labs.labs" :key="lab._id" :value="lab.title">
        {{ lab.title }}
      </option>
    </select>
    <TableLabsComponent v-if="labs.labs && labs.labs.length > 0" :labs="labs.labs" :select="select"/>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAllStudents } from "../services/students.service";
import TableLabsComponent from "../components/TableLabsComponent.vue";
import { getCorrection } from '../services/github.service'


export default {
  name: "ListLabsView",
  components: {
    TableLabsComponent,
  },
  setup() {
    const labs = ref([]);
    const select = ref("LAB1");
    const value = ref('')

    const fetchStudenstData = async () => {
      const response = await getAllStudents();
      labs.value = response;
      console.log(labs.value.labs);
    };
    const getAPiCall = async () => {
                const result = await getCorrection()
                value.value = result
            }
    onMounted(fetchStudenstData);
    onMounted(getAPiCall)

    return {
      labs,
      select,
    };
  },
};
</script>

<style lang="scss" scoped></style>
