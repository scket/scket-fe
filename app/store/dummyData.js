// 一旦ダミーデータを管理しておく

/*
  threads: [
    {
      title:
      user: {
        name:
        homeAddress:
      }
      body:
    }
  ]
*/

export const state = () => ({
  // ダミーデータ追加しておく
  threads: [
    {
      id: 12345,
      title: '幼稚園の男の子制服、カバンなど買います！',
      user: {
        name: 'bbb',
        homeAddress: '東京都千代田区'
      },
      body: '子どもが4月から幼稚園に行くことになり、良かったら男の子の制服や体操服(110〜120)かばん、体操服、道具類を譲って頂きたいですm(_ _)m'
    },
    {
      id: 23456,
      title: '自転車の駐輪場を探しております',
      user: {
        name: 'ccc',
        homeAddress: '神奈川県藤沢市'
      },
      body: '藤沢市の柄沢あたりで自転車の駐輪場を探しております。'
    }
  ],
  users: [
    {
      name: 'aaa',
      homeAddress: '埼玉県川越市',
      mailAddress: 'aaa@gmail.com'
    },
    {
      name: 'bbb',
      homeAddress: '東京都千代田区',
      mailAddress: 'bbb@gmail.com'
    },
    {
      name: 'ccc',
      homeAddress: '神奈川県藤沢市',
      mailAddress: 'ccc@gmail.com'
    }
  ]
});

export const getters = {
  threads: (state) => state.threads,
  users: (state) => state.users
};

export const mutations = {
  addThread (state, thread) {
    state.threads.push(thread);
  },

  addUser (state, user) {
    state.users.push(user);
  }
}

export const actions = {
  postThread ({ commit }, { payload }) {
    commit('addThread', payload);
  },

  addDummyUser ({ commit }, user) {
    commit('addUser', user);
  }
}
