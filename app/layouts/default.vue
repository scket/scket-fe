<template>
  <v-app id="inspire">
    <v-toolbar color="#ee827c" dark fixed app>
      <v-toolbar-title>Scket</v-toolbar-title>
      <v-spacer/>
      <v-btn outline>
        <v-icon small style="padding-right: 2px">home</v-icon>
        MyPage
      </v-btn>
    </v-toolbar>
    <v-content>
      <Nuxt />
    </v-content>
    <v-footer color="#ee827c" app/>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    })
  }
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
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

  .wrapper {
    padding: 16px;
    max-width: 700px;
    margin: 15px auto;
  }
</style>
