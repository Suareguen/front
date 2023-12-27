<template>
  <div class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div class="mt-12 relative h-max overflow-auto">
      <table class="w-full table-auto text-sm text-left">
        <thead class="text-gray-600 font-medium border-b">
          <tr>
            <th class="py-3 pr-6">name</th>
            <th class="py-3 pr-6">githubUserName</th>
            <th class="py-3 pr-6">Delivered</th>
            <th class="py-3 pr-6">Corrected</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 divide-y">
          <tr v-for="(item, idx) in filterStudents" :key="idx">
            <td class="pr-6 py-4 whitespace-nowrap">{{ item.name }}</td>
            <td class="pr-6 py-4 whitespace-nowrap">
              {{ item.githubUserName }}
            </td>
            <td class="pr-6 py-4 whitespace-nowrap">
              <span
                :class="`px-3 py-2 rounded-full font-semibold text-xs ${
                  item.status === 'Active'
                    ? 'text-green-600 bg-green-50'
                    : 'text-blue-600 bg-blue-50'
                }`"
                >{{ item.status }}</span
              >
            </td>
            <td class="pr-6 py-4 whitespace-nowrap">{{ item.plan }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "TableComponent",
  props: {
    students: Array,
    select: String,
  },
  setup(props) {
    const filterStudents = computed(() => {
      // First, check if students is defined and is an array
      if (!props.students || !props.students.length) {
        return [];
      }

      // Now filter students based on the selected course
      return props.students.filter((student) => {
        return student.courses.some((course) => course.title === props.select);
      });
    });
    return {
      filterStudents,
    };
  },
};
</script>
