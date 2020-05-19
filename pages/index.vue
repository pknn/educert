<template>
  <div class="container">
    <div v-if="role === 'officer'"></div>
    <div v-else-if="role === 'student'"></div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: this.$auth.user.role
    }
  }
}
</script>
