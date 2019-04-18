<template>
  <v-btn outline @click="clickHome">
    <v-icon small style="padding-right: 2px">
      home
    </v-icon>
    MyPage
  </v-btn>
</template>

<script>
export default {
  name: 'HomeButton',

  methods: {
    clickHome() {
      this.$router.push('/mypage')
    }
  }
}
</script>

<style scoped>

</style>
