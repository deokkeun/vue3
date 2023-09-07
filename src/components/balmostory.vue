<script setup>
 const greetingMessage = 'Hello World';
 const number = 12341234;
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <div>
      <slot name="first" :text="greetingMessage" :count="number"></slot>
    </div>
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
      return {
        name : 'balmostory'
      }
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