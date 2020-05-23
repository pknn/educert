<template>
  <div>
    <div class="text-right">
      <button
        v-if="isCreateMode"
        class="px-4 py-2 bg-red-400 rounded shadow"
        @click="toggleCreateMode"
      >
        Cancel
      </button>
      <button
        v-else
        class="px-4 py-2 bg-blue-400 rounded shadow"
        @click="toggleCreateMode"
      >
        New Record
      </button>
    </div>
    <div>
      <record-list />
      <div
        v-show="isCreateMode"
        class="w-full bg-white rounded shadow p-4 flex"
      >
        <div>
          <input
            v-model="studentIdSearchTerm"
            class="p-2"
            type="text"
            placeholder="Student ID"
            @input="searchUserWithEntity"
          />
          <div class="absolute bg-white rounded p-2">
            <ul>
              <li
                v-for="(student, index) in studentResult"
                :key="student.entity_id"
                class="p-2 hover:bg-gray-200 cursor-pointer"
                @click="select(index)"
              >
                <span class="text-sm text-gray-500">
                  #{{ student.entity_id }}
                </span>
                <span>{{ student.firstname }} {{ student.lastname }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="selectedStudent" class="mx-2 flex-1">
          <h1 class="text-xs">#{{ selectedStudent.public_address }}</h1>
          <h1>
            {{ selectedStudent.firstname }} {{ selectedStudent.lastname }}
          </h1>
        </div>
        <div v-show="selectedStudent" class="mx-2">
          <input
            v-model="gpax"
            class="p-2 w-full"
            type="number"
            placeholder="GPAX"
          />
        </div>
        <div>
          <button
            class="px-4 py-2 bg-green-400 rounded"
            :disabled="!selectedStudent || !gpax"
            @click="save"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import RecordList from '@/components/RecordList'
export default {
  name: 'Records',
  components: { RecordList },
  data: () => ({
    isCreateMode: true,
    studentIdSearchTerm: '',
    studentResult: [],
    selectedStudent: '',
    gpax: '',
    records: []
  }),
  async mounted() {
    this.records = await this.$axios.$get('/records')
  },
  methods: {
    toggleCreateMode() {
      this.isCreateMode = !this.isCreateMode
    },
    searchUserWithEntity: _.debounce(async function() {
      const result = await this.$axios.$get(
        `/users?entityID=${this.studentIdSearchTerm}`
      )
      const idList = this.records.map((r) => r.entity_id)
      this.studentResult = result.filter((r) => !idList.includes(r.entity_id))
    }, 500),
    select(index) {
      this.selectedStudent = this.studentResult[index]
      this.studentIdSearchTerm = this.selectedStudent.entity_id
      this.studentResult = []
    },
    async save() {
      const body = {
        holderID: this.selectedStudent.public_address,
        gpax: this.gpax
      }
      await this.$axios.$post('/records', body)
      const entity = await this.$axios.$get('/records')
      this.records.push(entity[entity.length - 1])
      this.studentIdSearchTerm = ''
      this.studentResult = []
      this.selectedStudent = ''
      this.gpax = ''
    }
  }
}
</script>
