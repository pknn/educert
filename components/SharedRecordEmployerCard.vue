<template>
  <div class="p-2 bg-white rounded shadow flex wdd mx-1 my-1">
    <h1 class="px-2">#{{ share.id }}</h1>
    <div class="flex-1">
      <h1>{{ share.firstname }} {{ share.lastname }}</h1>
      <h1 class="text-sm text-gray-600">{{ share.entity_id }}</h1>
    </div>
    <div class="text-center mr-4">
      <h1>GPAX</h1>
      <h1>{{ share.gpax }}</h1>
    </div>
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
  methods: {}
}
</script>
