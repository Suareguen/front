<template>
    <div class="bg-black text-white w-full flex flex-col items-center">
        <select class="text-black mt-2" name="" id="" v-model="select">
            <option value="SCE1">SCE1</option>
            <option value="SCE2">SCE2</option>
        </select>
        <TableComponent v-if="students.students && students.students.length > 0" :select="select" :students="students.students"/>
        <h1 v-else>Loading...</h1>
    </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue'
import { getAllStudents } from '../services/students.service'
import { ref, onMounted } from 'vue'
    export default {
        name: "ListStudents",
        components: {
            TableComponent
        },
        setup() {
            const students = ref([])
            const select = ref('SCE1')
            const fetchStudenstData = async () => {
                const response = await getAllStudents()
                students.value = response
            }

            onMounted(fetchStudenstData)
            return {
                students,
                select
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>