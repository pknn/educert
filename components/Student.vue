<template>
  <div class="bg-gray-200 pt-16 px-8 h-screen">
    <div class="flex">
      <div>
        <h1 class="text-4xl">
          {{ $auth.user.firstname }} {{ $auth.user.lastname }}
        </h1>
        <h1>Student ID: {{ $auth.user.entity_id }}</h1>
        <h1 class="text-gray-600">
          Public Address: {{ $auth.user.public_address }}
        </h1>
      </div>
      <div class="text-center flex-1">
        <h1 class="text-xl">GPAX</h1>
        <h1 class="text-5xl">{{ record.gpax }}</h1>
      </div>
    </div>
    <div>
      <transaction-list :transactions="transactions" />
    </div>
    <div>
      <div class="flex">
        <h1 class="text-xl flex-1">Shared Record</h1>
        <div>
          <div v-if="editMode">
            <input
              v-model="employerId"
              class="p-2 mr-2"
              placeholder="Employer ID"
              type="text"
            />
            <button
              class="px-4 py-2 bg-green-400 rounded shadow"
              @click="confirm"
            >
              Confirm
            </button>
            <button class="px-4 py-2 bg-red-400 rounded shadow" @click="cancel">
              Cancel
            </button>
          </div>
          <button
            v-else
            class="px-4 py-2 bg-green-400 rounded shadow"
            @click="toggleEditMode"
          >
            New Sharing
          </button>
        </div>
      </div>
      <shared-record-list :shares="sharing" @delete="onDelete" />
    </div>
    <button
      class="px-4 py-2 bg-red-400 hover:bg-red-300 rounded shadow"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script>
import TransactionList from '@/components/TransactionList'
import SharedRecordList from '@/components/SharedRecordStudentList'
export default {
  layout: 'withoutNav',
  components: {
    TransactionList,
    SharedRecordList
  },
  data: () => ({
    record: '',
    transactions: [],
    sharing: [],
    editMode: true,
    employerId: ''
  }),
  async mounted() {
    this.record = await this.$axios.$get('/records/me')
    this.transactions = await this.$axios.$get('/transactions/me')
    this.sharing = await this.$axios.$get(
      `/shares?holderId=${this.record.holder}`
    )
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
    toggleEditMode() {
      this.editMode = !this.editMode
    },
    cancel() {
      this.editMode = false
      this.employerId = ''
    },
    async confirm() {
      await this.$axios.$post('/shares', { employerId: this.employerId })
      this.sharing = await this.$axios.$get(
        `/shares?holderId=${this.record.holder}`
      )
      this.employerId = ''
    },
    async onDelete() {
      this.sharing = await this.$axios.$get(
        `/shares?holderId=${this.record.holder}`
      )
    }
  }
}
</script>
