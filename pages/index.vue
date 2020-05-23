<template>
  <div class="px-32">
    <div v-if="role === 'employer'"></div>
    <div v-else-if="role === 'student'">
      <student />
    </div>
  </div>
</template>

<script>
import Student from '@/components/Student'
export default {
  layout: 'withoutNav',
  components: {
    Student
  },
  data() {
    return {
      role: this.$auth.user.role
    }
  },
  mounted() {
    if (this.role === 'officer') {
      this.$router.push('/records')
    }
  }
}
</script>
