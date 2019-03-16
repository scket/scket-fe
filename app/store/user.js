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
  isLoggedIn: false
});

export const getters = {
  authUser: (state) => state.authUser,
  isLoggedIn: (state) => state.isLoggedIn
};

export const mutations = {
  setUser (state, user) {
    state.authUser = user;
    state.isLoggedIn = !!user || false;
  }
};

export const actions = {
  async login ({commit}, user) {
    const {email, password} = user;
    if (email === 'aaa' && password === 'aaa') {
      // TODO: APIを叩いて認証情報を取得する(ユーザー名や住所などの情報もレスポンスで受け取る)
      // 一旦仮のユーザーを作成
      Object.assign(user, {name: 'aaa', homeAddress: '埼玉県川越市'})
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
