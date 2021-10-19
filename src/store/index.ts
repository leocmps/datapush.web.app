import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import { Service } from './services'

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
    async getCompanies ({ commit }: { commit: Commit }) {
      try {
        const response = await Service.getCompanies()
        commit('setCompanies', response.data)
        return response.data
      } catch (err: any) {
        throw err.response.data
      }
    }
  },
  modules: {
  }
})
