<template>
  <div>
    <transaction-list :transactions="transactions" />
  </div>
</template>

<script>
import TransactionList from '@/components/TransactionList'
export default {
  components: {
    TransactionList
  },
  data: () => ({
    transactions: []
  }),
  async mounted() {
    const txs = await this.$axios.$get('/transactions')
    const recordIds = Array.from(new Set(txs.map((tx) => tx.recordId)))
    const issuerIds = Array.from(new Set(txs.map((tx) => tx.issuerId)))

    const holderReq = recordIds.map((addr) =>
      this.$axios.$get(`/users?address=${addr}`)
    )
    const issuerReq = issuerIds.map((addr) =>
      this.$axios.$get(`/users?address=${addr}`)
    )

    const holders = await Promise.all(holderReq)
    const issuers = await Promise.all(issuerReq)

    this.transactions = txs.map((tx) => {
      const hdr = holders.find((h) => h.public_address === tx.recordId)
      const isr = issuers.find((i) => i.public_address === tx.issuerId)

      return {
        ...tx,
        holderUser: hdr,
        issuerUser: isr
      }
    })
  }
}
</script>
