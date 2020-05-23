<template>
  <div class="py-4 flex flex-wrap justify-between">
    <shared-record-card
      v-for="share in shares"
      :key="share.id"
      :share="share"
    />
  </div>
</template>

<script>
import SharedRecordCard from '@/components/SharedRecordEmployerCard'
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
  methods: {}
}
</script>
