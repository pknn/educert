<template>
  <div class="py-4">
    <user-card
      v-for="user in users"
      :key="user.entity_id"
      :user="user"
      @deleteUser="onDeleteUser"
    />
  </div>
</template>

<script>
import UserCard from './UserCard'
export default {
  name: 'UserList',
  components: {
    UserCard
  },
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onDeleteUser(publicAddress) {
      this.$emit('deleteUser', publicAddress)
    }
  }
}
</script>
