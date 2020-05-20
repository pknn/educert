<template>
  <div class="w-full flex justify-center items-center bg-gray-100 p-4 rounded">
    <div class="flex-1">
      <div>
        <h1>{{ fullname }}</h1>
      </div>
      <div>
        <h1>{{ student.email }}</h1>
      </div>
    </div>
    <div>
      <h1 class="px-2">GPAX: {{ student.gpax }}</h1>
    </div>
    <div>
      <button class="px-4 py-2 bg-blue-400 hover:bg-blue-300 rounded m-1">
        Edit
      </button>
      <button class="px-4 py-2 bg-red-400 hover:bg-red-300 rounded m-1">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentItem',
  props: {
    student: {
      type: Object,
      default: () => ({
        firstName: '',
        lastName: '',
        email: '',
        gpax: 0.0
      })
    }
  },
  computed: {
    fullname() {
      const { firstname, lastname } = this.student
      return firstname + ' ' + lastname
    }
  }
}
</script>
