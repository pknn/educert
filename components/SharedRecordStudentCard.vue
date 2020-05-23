<template>
  <div class="p-2 bg-white rounded shadow flex wdd mx-1 my-1">
    <h1 class="mr-2">#{{ share.id }}</h1>
    <div class="flex-1">
      <h1 class="text-sm text-gray-600">Employer ID</h1>
      <h1>{{ share.employer }}</h1>
    </div>
    <button
      class="px-4 py-2 bg-red-400 hover:bg-red-300 rounded"
      @click="deleteRecord"
    >
      Delete
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.wdd {
  width: 48%;
}
</style>

<script>
export default {
  props: {
    share: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async deleteRecord() {
      await this.$axios.$delete(`/shares/${this.share.id}`)
      this.$emit('delete')
    }
  }
}
</script>
