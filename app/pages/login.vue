<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card class="elevation-12">
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="person"
                label="メールアドレス"
                type="text"
              />
              <v-text-field
                id="password"
                prepend-icon="lock"
                label="パスワード"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary">
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
  export default {
    name: 'Login',

    layout: 'login_register'
  }
</script>

<style scoped>
  .register_form {
    text-align: center;
  }
</style>
