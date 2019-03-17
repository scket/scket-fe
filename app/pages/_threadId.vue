<template>
  <v-container>
    <v-layout>
      <v-flex column>
        <v-card v-if="!!thread">
          <v-layout row wrap>
            <v-flex>
              <v-card-title primary-title>
                <div class="headline">
                  {{ thread.title }}
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sm8>
              <v-card-text>
                {{ thread.body }}
              </v-card-text>
            </v-flex>
            <v-flex sm4>
              <div>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>account_box</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ user.name }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>location_on</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ user.homeAddress }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-btn>投稿者に連絡する</v-btn>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card v-else>
          お探しの投稿は見つかりませんでした。
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  asyncData ({route, store}) {
    const threadId = route.path.replace(/\//g , '');
    // TODO: IDから実際の投稿とそれを投稿したユーザーを受け取る
    const threads = store.getters['dummyData/threads'] || [];
    const users = store.getters['dummyData/users'] || [];

    const thread = threads.find(thread => {
      return (String(thread.id) === threadId)
    });
    let user = null;
    if (!!thread) {
      user = users.find(user => {
        return (user.name === thread.user.name);
      });
    }
    return {
      thread: thread,
      user: user
    }
  }
}
</script>

<style scoped>

</style>
