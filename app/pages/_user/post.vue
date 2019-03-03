<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-card class="wrapper">
          <div class="post_headline">
            助っ人してほしい情報を入力
          </div>
          <v-divider light/>
          <v-card-text>
            <div>
              <div class="post_body_label">
                タイトル
              </div>
              <v-text-field
                solo
                placeholder="タイトル(通常40文字まで)"/>
            </div>
          </v-card-text>
          <v-card-text>
            <div>
              <div class="post_body_label">
                説明
              </div>
              <v-textarea
                solo
                name="input-7-4"
                auto-grow
                label="助っ人してほしいことの説明"
              ></v-textarea>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn flat color="orange" @click="postThread">
              投稿
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'post',

    methods: {
      postThread () {
        console.log('post');
      }
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
