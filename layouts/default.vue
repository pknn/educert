<template>
  <div class="flex">
    <div
      class="w-1/5 bg-blue-200 h-screen p-2 flex flex-col rounded shadow-lg z-50"
    >
      <div class="flex-1">
        <ul v-show="$auth.user.role === 'officer'">
          <li class="text-2xl px-6 py-4">
            User
            <ul class="ml-4 py-2">
              <li class="text-lg py-2">
                <nuxt-link
                  class="hover:text-blue-800"
                  :to="{ path: '/users/students' }"
                  >Students</nuxt-link
                >
              </li>
              <li class="text-lg py-2">
                <nuxt-link
                  class="hover:text-blue-800"
                  :to="{ path: '/users/officers' }"
                  >Officers</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="text-2xl px-6 py-4">
            <nuxt-link class="hover:text-blue-800" :to="{ path: '/records' }"
              >Records</nuxt-link
            >
          </li>
          <li class="text-2xl px-6 py-4">
            <nuxt-link
              class="hover:text-blue-800"
              :to="{ path: '/transactions' }"
              >Transactions</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="mx-6">
        <span class="my-2">
          {{ `${$auth.user.firstname} ${$auth.user.lastname}` }}
        </span>
        <button
          class="w-full px-4 py-2 bg-red-400 mb-8 rounded text-white"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
    <div class="p-8 bg-gray-200 w-full z-30">
      <nuxt />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
li > .nuxt-link-exact-active {
  @apply text-blue-700;
}
</style>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
html {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
