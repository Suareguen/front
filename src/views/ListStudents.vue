<template>
    <div>
        <button>Refresh Data</button>
        <h1>List Students</h1>
        <TableComponent :students="students"/>
    </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue'
import { getAllStudents } from '../services/students.service'
import { ref } from 'vue'
    export default {
        name: "ListStudents",
        components: {
            TableComponent
        },
        setup() {
            const students = ref([])
            const fetchStudenstData = async () => {
                const response = await getAllStudents()
                students.value = response
            }
            fetchStudenstData()
            return {
                students
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>