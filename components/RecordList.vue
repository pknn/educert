<template>
  <div class="py-4">
    <record-card
      v-for="record in records"
      :key="record.holder"
      :record="record"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import RecordCard from '@/components/RecordCard'
export default {
  components: {
    RecordCard
  },
  props: {
    records: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onEdit() {
      this.$emit('edit')
    }
  }
}
</script>
