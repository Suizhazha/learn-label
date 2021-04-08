<template>
  <div id="app">
    <h1> this is app</h1>
<!--<Parent/>-->
    <router-link to="/home">go to home</router-link>
  <router-view/>
    <hr>
    <router-link to="/son">go to son </router-link>
    <hr>
    <div>vuex: <span style="color: green">{{count}} </span></div>
  </div>
</template>

<script>
// import Parent from "@/views/Parent"
export default {
  // components: {Parent},
  computed: {
   count() {
      return this.$store.state.count
    },
  },
}
</script>