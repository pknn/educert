<template>
  <div class="bg-blue-700 h-screen w-screen">
    <div class="box">
      <h1 class="text-xl">Login</h1>
      <form @submit.prevent="login">
        <div>
          <input v-model="email" placeholder="Email" type="email" />
        </div>
        <div>
          <input v-model="password" placeholder="Password" type="password" />
        </div>
        <div>
          <button
            class="rounded my-1 p-2 w-full bg-blue-400 hover:bg-blue-300"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="postcss">
input {
  @apply outline-none;
}
</style>

<style lang="postcss" scoped>
.box {
  @apply inset-0 m-auto absolute bg-white w-1/3 rounded shadow p-4 flex flex-col justify-center items-center;
  max-height: 20rem;
}
input {
  @apply my-1 p-2 border-gray-200 border rounded shadow-inner;
}
</style>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: { email: this.email, password: this.password }
        })
      } catch (error) {
        alert('Email or Password is not correct.')
        this.email = ''
        this.password = ''
      }
    }
  }
}
</script>
