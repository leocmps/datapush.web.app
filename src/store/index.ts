import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: []
  },
  mutations: {
    setCompanies (state, payload) {
      state.companies = payload || []
    }
  },
  actions: {
    async getCompanies () {

    }
  },
  modules: {
  }
})
