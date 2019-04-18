// 検索クエリの状態管理
/*
 selected: {
    city: [],
    date: []
  },
 keyword: ''
 */

export const state = () => ({
  selected: {
    city: [],
    date: []
  },
  keyword: ''
});

export const getters = {
  selectedCity: (state) => {
    return state.selected.city.join('&');
  },

  selectedDate: (state) => {
    return state.selected.date.join('&');
  },

  keyword: (state) => {
    return state.keyword;
  }
};

export const mutations = {
  setSelectedCity (state, city) {
    state.selected.city = city;
  },

  setSelectedDate (state, date) {
    state.selected.date = date;
  },

  setKeyword (state, keyword) {
    state.keyword = keyword
  }
};

export const actions = {
  setSelectedCity ({commit}, {city}) {
    commit('setSelectedCity', city)
  },

  resetSelectedCity ({commit}) {
    commit('setSelectedCity', [])
  },

  setSelectedDate ({commit}, {date}) {
    commit('setSelectedDate', date)
  },

  setKeyword ({commit}, {keyword}) {
    commit('setKeyword', keyword)
  }
}
