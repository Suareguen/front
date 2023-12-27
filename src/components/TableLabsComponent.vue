<template>
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="mt-12 relative h-max overflow-auto">
        <table class="w-full table-auto text-sm text-left">
          <thead class="text-gray-600 font-medium border-b">
            <tr>
              <th class="py-3 pr-6">name</th>
              <th class="py-3 pr-6">githubUserName</th>
              <th class="py-3 pr-6">Corrected</th>
              <th class="py-3 pr-6">Course</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 divide-y">
            <tr v-for="(item, idx) in filterLabs[0].submittedBy" :key="idx">
              <td class="pr-6 py-4 whitespace-nowrap">{{ item.student.name }}</td>
              <td class="pr-6 py-4 whitespace-nowrap">
                {{ item.student.githubUserName }}
              </td>
              <td class="pr-6 py-4 whitespace-nowrap">
                <span
                  :class="`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.status === 'Corrected'
                      ? 'text-green-600 bg-green-50'
                      : 'text-red-600 bg-red-50'
                  }`"
                  >{{ item.status }}</span
                >
              </td>
              <td class="pr-6 py-4 whitespace-nowrap">{{ item.student.courses[0].title }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from  'vue'
  export default {
    name: "TableLabsComponent",
    props: {
      labs: Array,
      select: String,
    },
    setup(props) {
      const filterLabs = computed(() => {
        // First, check if students is defined and is an array
        if (!props.labs || !props.labs.length) {
          return [];
        }

        // Now filter students based on the selected course
        return props.labs.filter((lab) => {
          return(lab.title === props.select);
        })
      })
      return {
         filterLabs
      }
    },
  };
  </script>
  