<template>
  <div>
    <h1>this is Home page</h1>
    <p>{{name}}</p>
    <form action=""> 
      <Inputv v-model="name" />
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
     name:'Kim'
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