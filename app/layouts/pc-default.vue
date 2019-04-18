<template xmlns="http://www.w3.org/1999/xhtml">
  <v-app id="inspire">
    <v-toolbar
      extension-height="60px"
      color="#fff"
      dark
      fixed
      app
      extended
    >
      <v-toolbar-title>
        <title-logo-button />
      </v-toolbar-title>

      <v-spacer />
      <div v-if="!isLoggedIn">
        <login-button />
        <register-button />
      </div>
      <div v-else>
        <home-button />
      </div>

      <template slot="extension">
        <search-form />
      </template>
    </v-toolbar>
    <v-content style="background-color: #EEEEEE">
      <Nuxt />
    </v-content>
    <v-footer color="#fff" app height="auto">
      <v-layout justify-center row wrap>
        <v-btn
          v-for="link in links"
          :key="link"
          color="black"
          flat
        >
          {{ link }}
        </v-btn>
        <v-flex py-3 text-xs-center black--text xs12>
          &copy;2019 — <strong>Scket</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import {mapGetters} from 'vuex';
import TitleLogoButton from '../components/atoms/TitleLogoButton';
import LoginButton from '../components/atoms/LoginButton';
import RegisterButton from '../components/atoms/RegisterButton';
import HomeButton from '../components/atoms/HomeButton';
import SearchForm from '../components/molecules/SearchForm';

export default {
  components: {
    TitleLogoButton,
    LoginButton,
    RegisterButton,
    HomeButton,
    SearchForm
  },

  data: () => ({
    size: '60px',
    links: [
      'scketについて',
      'プライバシー',
      '利用規約',
      'お問い合わせ'
    ]
  }),

  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn'
    })
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
