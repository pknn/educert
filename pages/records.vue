<template>
  <div>
    <div class="text-right">
      <nuxt-link
        :to="{ name: 'records-edit-id', params: { id: 'new' } }"
        class="px-4 py-2 bg-blue-400 rounded shadow"
        @click="create"
      >
        New Record
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Records',
  async asyncData({ $axios }) {
    const records = await $axios.$get('/records')
    return { records }
  }
}
</script>
