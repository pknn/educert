<template>
  <div class="p-4 my-1 bg-white rounded shadow flex items-center">
    <div class="mx-2">
      <h1 class="text-gray-500">#{{ transaction.id }}</h1>
      <h1>{{ new Date(transaction.createdAt).toLocaleString() }}</h1>
    </div>
    <div class="mx-2">
      <h1 :class="txTypeClass">{{ transaction.transactionType }}</h1>
    </div>
    <div v-if="transaction.holderUser" class="mx-2 flex-1 w-full">
      <h1>
        {{ transaction.holderUser.firstname }}
        {{ transaction.holderUser.lastname }}
      </h1>
      <h1 class="text-gray-600 text-sm">
        Record ID: <span class="text-xs">{{ transaction.recordId }}</span>
      </h1>
    </div>
    <div class="mx-2 flex-1 w-full">
      <h1 v-if="transaction.issuerUser">
        {{ transaction.issuerUser.firstname }}
        {{ transaction.issuerUser.lastname }}
      </h1>
      <h1 v-if="transaction.issuerUser" class="text-gray-600 text-sm">
        Issuer ID: <span class="text-xs">{{ transaction.issuerId }}</span>
      </h1>
      <h1>
        Issuer ID: <span class="text-xs">{{ transaction.issuerId }}</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    holder: '',
    issuer: ''
  }),
  computed: {
    txTypeClass() {
      const clss = [
        this.transaction.transactionType === 'create'
          ? 'text-green-400'
          : this.transaction.transactionType === 'edit'
          ? 'text-yellow-500'
          : 'text-red-400'
      ]
      return clss.join(' ')
    }
  }
}
</script>
