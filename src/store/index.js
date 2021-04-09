import Vue from 'vue'
import Vuex from 'vuex'
import count from "@/store/count"

Vue.use(Vuex)

console.log(Vuex)

export default new Vuex.Store({

  modules: {
    count
  }
})
