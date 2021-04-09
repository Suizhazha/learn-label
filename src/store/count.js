export default {
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
}