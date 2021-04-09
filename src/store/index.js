import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

console.log(Vuex)

export default new Vuex.Store({
  state: {
    count:5
  },
  mutations: {
    add(){
      this.state.count++
    }
  },
  actions: {
    add(context){
      setTimeout(()=>{
        context.commit('add')
      },2000)
    }
  },
  modules: {
  }
})
