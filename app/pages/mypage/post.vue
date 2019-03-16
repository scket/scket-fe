<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-card class="wrapper">
          <div class="post_headline">
            助っ人してほしい情報を入力
          </div>
          <v-divider light />
          <v-card-text>
            <div>
              <div class="post_body_label">
                タイトル
              </div>
              <v-text-field
                v-model="formData.title"
                solo
                placeholder="タイトル(通常40文字まで)"
              />
            </div>
          </v-card-text>
          <v-card-text>
            <div>
              <div class="post_body_label">
                説明
              </div>
              <v-textarea
                v-model="formData.body"
                solo
                name="input-7-4"
                auto-grow
                label="助っ人してほしいことの説明"
              />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn flat color="orange" @click="handlePost">
              投稿
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  middleware: 'auth',

  data () {
    return {
      formData: {
        title: '',
        body: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      user: 'user/authUser'
    })
  },

  methods: {
    handlePost () {
      const payload = {
        id: Math.random(),
        ...this.formData,
        user: {
          name: this.user.name,
          homeAddress: this.user.homeAddress
        }
      };
      // 一旦ダミーデータに追加
      // TODO: APIにフォームの情報を渡す
      this.postThread({ payload })
      this.$router.push('/');
    },

    ...mapActions({
      postThread: 'dummyData/postThread'
    })
  }
}
</script>

<style scoped>
  .post_headline {
    text-align: center;
    font-size: 20px;
    padding-bottom: 10px;
  }

  .post_body_label {
    padding: 5px 0;
  }
</style>
