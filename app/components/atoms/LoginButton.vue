<template>
  <v-btn small color="#ea352d" @click="clickLogin">
    ログイン
  </v-btn>
</template>

<script>
export default {
  methods: {
    clickLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
