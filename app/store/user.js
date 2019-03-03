/*
  user: {
    name:
    homeAddress:
    mailAddress:
  }
 */

export const state = () => ({
  isLoggedIn: false,
  user: {
    name: 'hogehoge',
    homeAddress: 'aaa県bbb市',
    mailAddress: 'fugafuga@aaa.co.jp'
  }
});

export const getters = {
  getUser: (state) => state.user,
  getIsLoggedIn: (state) => state.isLoggedIn
};

export const mutations = {
  setUser (state, {user}) {
    state.user = user;
    state.isLoggedIn = true;
  }
};

export const actions = {
  login ({commit}, {user}) {
    commit('setUser', {user});
  },

  register ({commit}, {user}) {
    commit('setUser', {user});
  }
};
