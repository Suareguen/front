<template>
    <div>
        <button>Refresh Data</button>
        <h1>List Students</h1>
        <select name="" id="" v-model="select">
            <option value="SCE1">SCE1</option>
            <option value="SCE2">SCE2</option>
        </select>
        <TableComponent :students="students.students"/>
    </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue'
import { getAllStudents } from '../services/students.service'
import { ref, onMounted, computed } from 'vue'
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
                console.log(students.value)
            }
            onMounted(fetchStudenstData)
            const filteredStudents = computed(() => {
            return students.value.students.filter(student => {
                return student.courses.some(course => course.title === select.value);
            });
        });
            return {
                students,
                select,
                filteredStudents
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>