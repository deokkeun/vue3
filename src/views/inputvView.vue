<template>
  <div>
    <h1>this is Home page</h1>
    <p>{{name1}}</p>
    <form action=""> 
      <Inputv v-model="name1" />
    </form>
  </div>
</template>

<script>
import Inputv from '@/components/Inputv.vue'

export default{
  components:{
    Inputv
  },
  data(){
   return{
     name1:'kk'
    }
  }
}
</script>


<style scoped>
h1{
  color: red;
  font-size: 20px;
}
</style>