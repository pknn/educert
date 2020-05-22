<template>
  <div class="flex">
    <div class="w-1/5 bg-blue-200 h-screen fixed p-2 flex">
      <ul class="mx-6">
        <li class="text-2xl py-4">
          User
          <ul class="ml-4 py-2">
            <li class="text-lg py-2">
              <nuxt-link :to="{ path: '/users/students' }">Students</nuxt-link>
            </li>
            <li class="text-lg py-2">
              <nuxt-link :to="{ path: '/users/officers' }">Officers</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="text-2xl py-4">
          <nuxt-link :to="{ path: '/records' }">Records</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt />
  </div>
</template>

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
