<template>
  <div id="app">
    <h1> this is app</h1>
<!--<Parent/>-->
    <router-link to="/home">go to home</router-link>
  <router-view/>
    <hr>
    <router-link to="/son">go to son </router-link>
    <hr>
    <div>vuex: <span style="color: green">{{count}}</span>
      <button @click="add">+1</button>
    </div>
  </div>
</template>

<script>
// import Parent from "@/views/Parent"
import {mapState} from 'vuex'
export default {
  // components: {Parent},

  // computed: {
  //  count() {
  //     return this.$store.state.count
  //   },
  // },

  //辅助函数mapState
  computed: mapState({
    count:state => state.count,

    //或者
    // count:'count'
  }),
  methods:{
    add(){
      this.$store.dispatch('add')
    }
  }


}
</script>