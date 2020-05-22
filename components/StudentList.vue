<template>
  <div class="py-4">
    <student-card
      v-for="student in students"
      :key="student.entity_id"
      :student="student"
      @deleteStudent="onDeleteStudent"
    />
  </div>
</template>

<script>
import StudentCard from './StudentCard'
export default {
  name: 'StudentLists',
  components: {
    StudentCard
  },
  props: {
    students: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onDeleteStudent(publicAddress) {
      this.$emit('deleteStudent', publicAddress)
    }
  }
}
</script>
