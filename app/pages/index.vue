<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex>
          <v-card>
            <v-list two-line>
              <template v-for="(thread, index) in threads">
                <v-list-tile :key="thread.id" @click="click(thread.id)">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ thread.title }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">
                      {{ thread.user.homeAddress }}&nbsp;&nbsp;{{ thread.user.name }}
                    </v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ thread.body }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action style="justify-content: flex-end" @click.stop="toggle(index)">
                    <v-list-tile-action-text>お気に入り</v-list-tile-action-text>
                    <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">
                      star_border
                    </v-icon>
                    <v-icon v-else color="yellow darken-2">
                      star
                    </v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider
                  v-if="index < threads.length"
                  :key="index"
                />
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
      <nuxt-link to="/mypage/post">
        投稿する
      </nuxt-link>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  asyncData () {
    // TODO: ここでAPIを叩いて、スレッド一覧を受け取る(キー:threads)
    return {
      // TODO: storeのuserからお気に入りの配列を受け取って参照する
      // ログイン状態じゃなければ何もしないようにする
      selected: []
    }
  },

  computed: {
    ...mapGetters({
      threads: 'dummyData/threads'
    })
  },

  methods: {
    click (id) {
      this.$router.push(`/${id}`);
    },

    toggle (index) {
      const i = this.selected.indexOf(index)
      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  }
}
</script>
