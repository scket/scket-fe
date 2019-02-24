/*
  logs: [
    {
      user:
      date:
      message:
    }
    ...
  ]
 */
export const state = () => ({
  logs: []
});

export const getters = {
  getLogs: state => state.logs
};

export const mutations = {
  addLogs (state, payload) {
    state.logs.push(payload);
  }
};

export const actions = {
  post ({commit}, payload) {
    commit('addLogs', payload)
  }
};
