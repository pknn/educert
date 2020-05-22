<template>
  <div>
    <div class="text-right">
      <input
        v-model="studentId"
        type="text"
        placeholder="Student ID"
        class="px-4 py-2 rounded"
      />
      <input
        v-model="publicAddress"
        type="text"
        placeholder="Public Address"
        class="px-4 py-2 rounded"
      />
      <button class="px-4 py-2 bg-blue-400 rounded shadow" @click="invite">
        Invite Student
      </button>
    </div>
    <div>
      <h1>Student List</h1>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    publicAddress: '',
    studentId: ''
  }),
  methods: {
    async invite() {
      await this.$axios.$post('/users/invite', {
        publicAddress: this.publicAddress,
        entityId: this.studentId
      })
      this.publicAddress = ''
      this.studentId = ''
    }
  }
}
</script>
