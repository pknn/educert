<template>
  <div class="bg-blue-700 h-screen w-screen">
    <div class="box">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl mb-6">Login</h1>
        <button
          class="bg-orange-200 hover:bg-orange-400 px-4 py-2 text-l rounded flex justify-center items-center"
          @click="login"
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/metamask.svg"
            class="w-4 h-4 mr-2"
          />
          Login with Metamask
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.box {
  @apply inset-0 m-auto absolute bg-white w-1/3 rounded shadow p-4 flex justify-center items-center;
  max-height: 20rem;
}
</style>

<script>
export default {
  layout: 'withoutNav',
  data() {
    return {
      isUserExists: true
    }
  },
  methods: {
    async login() {
      const [account] = await window.ethereum.enable()
      const user = await this.$axios.$get(`/users/exists/${account}`)
      if (!user) this.$router.push(`/register?addr=${account}`)
      else {
        await this.$auth.loginWith('local', {
          data: { publicAddress: account }
        })
      }
    }
  }
}
</script>
