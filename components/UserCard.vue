<template>
  <div class="px-4 py-3 my-2 bg-white rounded shadow flex items-center">
    <div class="flex-1">
      <h1 class="text-gray-700">#{{ user.entity_id }}</h1>
      <h1 class="text-xl">{{ fullName }}</h1>
      <h1 class="text-sm text-gray-500">{{ user.public_address }}</h1>
    </div>
    <div>
      <button
        v-show="user.public_address !== $auth.user.public_address"
        class="px-4 py-2 bg-red-500 rounded hover:bg-red-400"
        @click="deleteUser"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstname} ${this.user.lastname}`
    }
  },
  methods: {
    deleteUser() {
      this.$emit('deleteUser', this.user.public_address)
    }
  }
}
</script>
