<template>
  <div>
    <div class="px-2 py-4 bg-blue-300 inset-t-0 flex shadow">
      <div class="flex-1" />
      <div>
        <button
          class="px-4 py-2 bg-red-500 rounded text-white hover:bg-red-400"
          @click="logout"
        >
          Logout
        </button>
      </div>
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
