/*
  threads: [
    {
      title:
      user: {
        name:
        homeAddress:
      }
      content:
    }
  ]
*/

export const state = () => ({
  threads: []
});

export const getters = {
  getThreads: (state) => state.threads
};

export const mutations = {
  addThread ({state}, {postThread}) {
    state.threads.push(postThread);
  },

  getThreads ({state}, threads) {
    state.threads = threads;
  }
}

export const actions = {
  postThread ({commit}, {postThread}) {
    commit('addThread', {postThread});
  },

  getThreads ({commit}) {
    const threads = [];
    commit('getThreads', threads);
  },
}
