import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    article: {}
  },
  mutations: {
    pushArticles: (state, payload) => {
      state.articles = [...state.articles, ...payload]
    },
    setArticle: (state, payload) => {
      state.article = payload
    }
  },
  actions: {
    getArticles: async ({commit}) => {
      const response = await axios.get('http://localhost:3000/articles')
      commit('pushArticles', response.data)
    },
    setArticle: ({commit}, payload) => {
      commit('setArticle', payload)
    }
  },
  getters: {
    articles: state => state.articles,
    article: state => state.article
  }
})
