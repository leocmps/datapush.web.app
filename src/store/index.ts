import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import { Service } from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [],
    company: null
  },
  mutations: {
    setCompanies (state, payload) {
      state.companies = payload || []
    },
    setCompany (state, payload) {
      state.company = payload
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
    },
    async getCompaniesByCode ({ commit }: { commit: Commit }, code: string) {
      try {
        commit('setCompany', null)
        const response = await Service.getCompaniesByCode(code)
        commit('setCompany', response.data)
        return response.data
      } catch (err: any) {
        throw err.response.data
      }
    },
    async getCompaniesFiltered ({ commit }: { commit: Commit }, name: string) {
      try {
        const response = await Service.getCompaniesFiltered(name)
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
