<template>
  <v-container>
    <v-layout columr>
      <v-flex>
        <v-card class="wrapper">
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="formData.email"
                prepend-icon="person"
                label="メールアドレス"
                type="text"
              />
              <v-text-field
                id="password"
                v-model="formData.password"
                prepend-icon="lock"
                label="パスワード"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="handleLogin">
              ログイン
            </v-btn>
          </v-card-actions>
          <v-divider light />
          <div class="register_form">
            <v-card-text>
              アカウントをお持ちでない方はこちら
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary">
                新規会員登録
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Login',

  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async handleLogin () {
      try {
        await this.login({...this.formData});
        this.$router.push('/');
      } catch (e) {
        console.log(e.message);
      }
    },

    ...mapActions({
      login: 'user/login'
    })
  }
}
</script>

<style scoped>
  .register_form {
    text-align: center;
  }
</style>
