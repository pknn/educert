<template>
  <div class="py-8 px-32">
    <div v-if="role === 'officer'">
      <student-list />
    </div>
    <div v-else-if="role === 'student'"></div>
    <div v-else></div>
  </div>
</template>

<script>
import StudentList from '@/components/officer/studentList.vue'
export default {
  layout: 'withNav',
  components: {
    StudentList
  },
  data() {
    return {
      role: this.$auth.user.role
    }
  }
}
</script>
