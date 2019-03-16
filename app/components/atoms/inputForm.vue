<template>
  <v-layout row wrap>
    <v-flex xs8 sm10>
      <v-text-field
        v-model="message"
        solo
        clearable
        placeholder="ここはテキストフォームです"
      />
    </v-flex>
    <v-flex xs4 sm2>
      <v-btn>送信</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>

</style>
