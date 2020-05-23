<template>
  <div>
    <div class="text-right">
      <input
        v-model="userId"
        type="text"
        placeholder="User ID"
        class="px-4 py-2 rounded"
      />
      <input
        v-model="publicAddress"
        type="text"
        placeholder="Public Address"
        class="px-4 py-2 rounded"
      />
      <button class="px-4 py-2 bg-blue-400 rounded shadow" @click="invite">
        Invite Officer
      </button>
    </div>
    <div>
      <user-list :users="officers" @deleteUsers="onDeleteOfficer" />
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList'
export default {
  name: 'UsersOfficer',
  components: {
    UserList
  },
  async asyncData({ $axios }) {
    const officers = await $axios.$get('/users?role=officer')
    return { officers }
  },
  data: () => ({
    publicAddress: '',
    userId: ''
  }),
  mounted() {
    if (this.$auth.user.role !== 'officer') this.$router.push('/')
  },
  methods: {
    async invite() {
      await this.$axios.$post('/users/invite', {
        publicAddress: this.publicAddress,
        entityId: this.studentId
      })
      this.publicAddress = ''
      this.studentId = ''
    },
    async onDeleteOfficer(publicAddress) {
      await this.$axios.$delete(`/users/${publicAddress}`)
      this.officers = this.officers.filter(
        (officer) => officer.public_address !== publicAddress
      )
    }
  }
}
</script>
