<template>
  <div class="p-4 my-1 bg-white rounded shadow">
    <div class="flex items-center">
      <div class="flex-1">
        <h1 class="text-gray-700">#{{ record.entity_id }}</h1>
        <h1 class="text-xl">{{ fullName }}</h1>
        <h1 class="text-sm text-gray-500">{{ record.holder }}</h1>
      </div>
      <div class="mx-2">
        <input
          v-if="editMode"
          v-model="gpax"
          class="p-2"
          type="number"
          placeholder="GPAX"
        />
        <h1 v-else class="mx-4">GPAX: {{ record.gpax }}</h1>
      </div>
      <div v-if="editMode || deleteMode">
        <button
          class="px-4 py-2 bg-green-500 rounded hover:bg-green-400 outline-none"
          @click="confirm"
        >
          Confirm
        </button>
        <button
          class="px-4 py-2 bg-red-500 rounded hover:bg-red-400 outline-none"
          @click="cancel"
        >
          Cancel
        </button>
      </div>
      <div v-else>
        <button
          class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-400 outline-none"
          @click="toggleEditMode"
        >
          Edit
        </button>
        <button
          class="px-4 py-2 bg-red-500 rounded hover:bg-red-400 outline-none"
          @click="toggleDeleteMode"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordCard',
  props: {
    record: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    editMode: false,
    deleteMode: false,
    gpax: ''
  }),
  computed: {
    fullName() {
      return `${this.record.firstname} ${this.record.lastname}`
    }
  },
  mounted() {
    this.gpax = this.record.gpax
  },
  methods: {
    toggleEditMode() {
      this.editMode = true
    },
    toggleDeleteMode() {
      this.deleteMode = true
    },
    cancel() {
      this.editMode = false
      this.deleteMode = false
      this.gpax = this.record.gpax
    },
    async confirm() {
      if (this.editMode) {
        await this.confirmEdit()
      }
      if (this.deleteMode) {
        await this.delete()
      }
    },
    async confirmEdit() {
      await this.$axios.$put(`/records/${this.record.holder}`, {
        gpax: this.gpax
      })
      this.$emit('edit')
      this.editMode = false
    },
    async delete() {
      await this.$axios.$delete(`/records/${this.record.holder}`)
      this.$emit('edit')
      this.deleteMode = false
    }
  }
}
</script>
