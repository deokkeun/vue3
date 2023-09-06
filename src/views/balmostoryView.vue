<template>
  <div>
    <h1>this is Home page</h1>
    <p>{{name}}</p>
    <Balmostory title="Home">
      <template v-slot:first="Home">첫번째 slot {{ Home }}</template>
      <template v-slot:default>두번째 slot</template>
    </Balmostory>
  </div>
</template>

<script>
import Balmostory from '@/components/Balmostory.vue'
// 컴포넌트 불러오기
export default{
  // 컴포넌트 등록하기.
  components:{
    Balmostory
  },
  data(){
   return{
     name:"balmostory"
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