<template>
  <div class="py-4">
    <shared-record-card
      v-for="share in shares"
      :key="share.id"
      :share="share"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import SharedRecordCard from '@/components/SharedRecordStudentCard'
export default {
  components: {
    SharedRecordCard
  },
  props: {
    shares: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onDelete() {
      this.$emit('delete')
    }
  }
}
</script>
