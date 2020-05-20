<template>
  <div class="py-8 px-32">
    <div v-if="role === 'officer'"></div>
    <div v-else-if="role === 'student'"></div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  layout: 'withNav',
  data() {
    return {
      role: this.$auth.user.role
    }
  }
}
</script>
