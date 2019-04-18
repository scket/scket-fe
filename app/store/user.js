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
});

export const getters = {
  authUser: (state) => state.authUser,
  isLoggedIn: (state) => state.isLoggedIn
};

export const mutations = {
  setUser (state, userData) {
    state.authUser = userData;
    state.isLoggedIn = !!userData || false;
  }
};

export const actions = {
  async login ({commit, store}, {userData}) {
    const {email, password} = userData;
    if (email === 'aaa' && password === 'aaa') {
      // TODO: APIを叩いて認証情報を取得する(ユーザー名や住所などの情報もレスポンスで受け取る)
      // 一旦仮のユーザーを作成
      Object.assign(userData, {name: 'aaa', homeAddress: '埼玉県川越市'})
      // ダミーのユーザーリストに追加
      commit('setUser', userData);
    } else {
      throw new Error('Invalid User');
    }
  },

  logout ({commit}) {
    commit('setUser', null);
  },

  register ({commit}, {userData}) {
    commit('setUser', userData);
  }
};
