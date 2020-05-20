<template>
  <div class="bg-blue-700 h-screen w-screen">
    <div class="box">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl">Welcome to educert</h1>
        <h2 class="text-regular">Let's get ready with your account.</h2>
        <div v-show="valid.length !== 0" class="my-3 bg-red-200 rounded p-4">
          <ul>
            <li v-for="v in valid" :key="v" class="text-red-500 text-sm">
              {{ v }}
            </li>
          </ul>
        </div>
        <div class="mb-2">
          <span>Are you a</span>
          <input id="employer" v-model="role" type="radio" value="employer" />
          <label for="employer">Employer</label>
          <input id="student" v-model="role" type="radio" value="student" />
          <label for="student">Student</label>
          <input id="officer" v-model="role" type="radio" value="officer" />
          <label for="officer">Officer</label>
        </div>
        <div>
          <div class="p-1">
            <input v-model="firstName" type="text" placeholder="Firstname" />
          </div>
          <div class="p-1">
            <input v-model="lastName" type="text" placeholder="Lastname" />
          </div>
          <div v-show="role !== 'employer'" class="p-1">
            <input
              v-model="verification"
              type="text"
              placeholder="Verification Code"
            />
          </div>
          <div class="p-1">
            <button
              class="outline-none focus:outline-none bg-blue-200 hover:bg-blue-400 px-4 py-2 text-l rounded w-full"
              @click="register"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.box {
  @apply inset-0 m-auto absolute bg-white w-1/3 rounded shadow p-4 flex justify-center items-center;
  max-height: 30rem;
}
input[type='text'] {
  @apply outline-none px-2 py-1 rounded shadow-inner border border-blue-200;
}
</style>

<script>
export default {
  auth: false,
  data: () => ({
    role: 'employer',
    valid: [],
    firstName: '',
    lastName: '',
    verification: ''
  }),
  methods: {
    checkInput() {
      this.valid = []
      if (!this.firstName) this.valid.push('Firstname could not be empty.')
      if (!this.lastName) this.valid.push('Lastname could not be empty.')
      if (this.role !== 'employer' && !this.verification)
        this.valid.push('Verification Code could not be empty.')
      setTimeout(() => {
        this.valid = []
      }, 2000)
      return this.valid.length === 0
    },
    async register() {
      if (this.checkInput()) {
        const { firstName, lastName, verification, role } = this
        const { addr: publicAddress } = this.$route.query
        try {
          await this.$axios.$post('/users', {
            firstName,
            lastName,
            verification,
            role,
            publicAddress
          })
        } catch (error) {
          this.valid.push('Verification Code is not valid.')
          this.verification = ''
          setTimeout(() => {
            this.valid = []
          }, 2000)
        }
      }
    }
  }
}
</script>
