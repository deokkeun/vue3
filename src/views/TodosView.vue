<template>
  <div>
    TodosView <br/>
    {{ userId }}<br/>
    {{ title }} <br/>
    ---------------------------------------------------
    <!-- 1개일 경우 v-model="title" -->
    <Jsonplaceholder v-model:titleValue="title" v-model:userIdValue="userId"></Jsonplaceholder>
  </div>
</template>

<script>
import Jsonplaceholder from '@/components/Jsonplaceholder.vue';

export default{
  components: {
    Jsonplaceholder
  },
  data() {
    return {
      title: 'default Title',
      userId: 'default UserId'
    }
  }
}
</script>