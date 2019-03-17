/*
 authUser: {
   name:
   homeAddress:
   email:
   password:
 }
*/

export const state = () => ({
  authUser: {},
  isLoggedIn: false,
  reqPath: null
});

export const getters = {
  authUser: (state) => state.authUser,
  isLoggedIn: (state) => state.isLoggedIn,
  reqPath: (state) => state.reqPath
};

export const mutations = {
  setUser (state, user) {
    state.authUser = user;
    state.isLoggedIn = !!user || false;
  },

  setReqPath (state, path) {
    state.reqPath = path;
  }
};

export const actions = {
  async login ({commit, store}, user) {
    const {email, password} = user;
    if (email === 'aaa' && password === 'aaa') {
      // TODO: APIを叩いて認証情報を取得する(ユーザー名や住所などの情報もレスポンスで受け取る)
      // 一旦仮のユーザーを作成
      Object.assign(user, {name: 'aaa', homeAddress: '埼玉県川越市'})
      // ダミーのユーザーリストに追加
      commit('setUser', user);
    } else {
      throw new Error('Invalid User');
    }
  },

  logout ({commit}) {
    commit('setUser', null);
  },

  register ({commit}, {user}) {
    commit('setUser', user);
  }
};
