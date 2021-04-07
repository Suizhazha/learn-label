<template>
  <div>
<h1>Parent</h1>
    <hr>
    <Son :msg ="'from Parent msg'" @getMessage="getMessage" ref="child"></Son>
    <b>{{msg}}</b>

  </div>
</template>

<script lang="ts">
import Son from './Son.vue';
export default {
  name: 'Parent',
  components: {Son},
  data(){
    return {
      msg:''
    }
  },
  methods:{
    getMessage(val){
       this.msg = val
    }
  },
  mounted() {
    console.log(this.$children);
    console.log(this.$refs.child);
  }
};
</script>

<style lang="scss" scoped>

</style>