<template>
  <div class="py-4">
    <transaction-card
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
  </div>
</template>

<script>
import TransactionCard from '@/components/TransactionCard'
export default {
  components: {
    TransactionCard
  },
  props: {
    transactions: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    holders: [],
    issuers: []
  })
}
</script>
