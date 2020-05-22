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
      <user-list :users="students" @deleteUsers="onDeleteStudent" />
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList'
export default {
  name: 'UsersStudents',
  components: {
    UserList
  },
  async asyncData({ $axios }) {
    const students = await $axios.$get('/users?role=student')
    return { students }
  },
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
    },
    async onDeleteStudent(publicAddress) {
      await this.$axios.$delete(`/users/${publicAddress}`)
      this.students = this.students.filter(
        (student) => student.public_address !== publicAddress
      )
    }
  }
}
</script>
