<template>
  <div class="bg-gray-200 pt-16 px-8 h-screen">
    <div class="flex">
      <div>
        <h1 class="text-4xl">
          {{ $auth.user.firstname }} {{ $auth.user.lastname }}
        </h1>
        <h1 class="text-gray-600">
          Public Address: {{ $auth.user.public_address }}
        </h1>
      </div>
    </div>
    <div>
      <h1 class="text-xl">Shared Records</h1>
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
import SharedRecordList from '@/components/SharedRecordEmployerList'
export default {
  layout: 'withoutNav',
  components: {
    SharedRecordList
  },
  data: () => ({
    sharing: []
  }),
  async mounted() {
    this.sharing = await this.$axios.$get(
      `/shares?employerId=${this.$auth.user.public_address}`
    )
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
