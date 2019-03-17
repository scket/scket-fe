<template>
  <v-app id="inspire">
    <v-toolbar color="#ee827c" dark fixed app>
      <v-toolbar-title @click.prevent="clickLogo">
        Scket
      </v-toolbar-title>
      <v-spacer />
      <v-btn outline @click="clickHome">
        <v-icon small style="padding-right: 2px">
          home
        </v-icon>
        MyPage
      </v-btn>
    </v-toolbar>
    <v-content>
      <Nuxt />
    </v-content>
    <v-footer color="#ee827c" app height="auto">
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          flat
        >
          {{ link }}
        </v-btn>
        <v-flex
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;2019 — <strong>Scket</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      'scketについて',
      'プライバシー',
      '利用規約',
      'お問い合わせ'
    ]
  }),

  methods: {
    clickLogo () {
      this.$router.push('/')
    },

    clickHome () {
      this.$router.push('/mypage')
    }
  }
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
