<template>
  <v-btn flat color="#FFA000" @click="clickLogo">
    Scket
  </v-btn>
</template>

<script>
export default {
  methods: {
    clickLogo() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
