import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:63
  },
  mutations: {
    add(){
      this.state.count++
    }
  },
  actions: {
    add(context){
      context.commit('add')
    }
  },
  modules: {
  }
})
