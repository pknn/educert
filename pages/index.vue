<template>
  <div class="px-32">
    <div v-if="role === 'employer'">
      <employer />
    </div>
    <div v-else-if="role === 'student'">
      <student />
    </div>
  </div>
</template>

<script>
import Student from '@/components/Student'
import Employer from '@/components/Employer'
export default {
  layout: 'withoutNav',
  components: {
    Student,
    Employer
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
