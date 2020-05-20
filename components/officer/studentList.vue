<template>
  <div>
    <div v-if="students && students.length > 0">
      <div v-for="student in students" :key="student.id">
        <student-item :student="student" />
      </div>
    </div>
    <div v-else>
      <h1>No student right now~</h1>
    </div>
  </div>
</template>

<script>
import StudentItem from './studentItem'
export default {
  name: 'StudentList',
  components: { StudentItem },
  data() {
    return {
      students: undefined
    }
  },
  async mounted() {
    this.students = await this.$axios.$get('/users/students')
  }
}
</script>
