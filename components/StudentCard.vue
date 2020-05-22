<template>
  <div class="px-4 py-3 my-2 bg-white rounded shadow flex items-center">
    <div class="flex-1">
      <h1 class="text-gray-700">#{{ student.entity_id }}</h1>
      <h1 class="text-xl">{{ fullName }}</h1>
      <h1 class="text-sm text-gray-500">{{ student.public_address }}</h1>
    </div>
    <div>
      <button
        class="px-4 py-2 bg-red-500 rounded hover:bg-red-400"
        @click="deleteStudent"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    student: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    fullName() {
      return `${this.student.firstname} ${this.student.lastname}`
    }
  },
  methods: {
    deleteStudent() {
      this.$emit('deleteStudent', this.student.public_address)
    }
  }
}
</script>
