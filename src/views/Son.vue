<template>
  <div>
<h2>Son</h2>
    <h4>{{msg}}</h4>
    <button @click="postMessage">post</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Son',
  props:{
    msg:{
      type:String,
      default:''
    }
  },

  methods:{
    postMessage(){
      this.$emit('getMessage','i am from Son')
    }
  },

};
</script>

