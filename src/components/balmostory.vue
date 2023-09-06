<template>
  <div>
    <p>{{ title }}</p>
    <slot name="first" :homes="home"></slot>
    <p>{{ name }}</p>
    <slot></slot>
    <br>
    <button @click="updateName">clickme</button>
  </div>
</template>

<script>
  export default {
    props:{
        title:{
            type:String,
            default : "delfault title",
            required:false
        }
    },
    data() {
      return {name : 'balmostory'}
    },
    methods : {
      updateName() {
        this.name = "balmostory updated"
      }
    }
  }
</script>

<style scoped>
</style>