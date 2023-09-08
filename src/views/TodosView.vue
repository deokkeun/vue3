<template>
  <div>
    TodosView <br/>
    {{ userId }}<br/>
    {{ id }}<br/>
    {{ title }} <br/>
    {{ completed }} <br/>
    ---------------------------------------------------
    <!-- 1개일 경우 v-model="title" -->
    <Jsonplaceholder v-model:userIdValue="userId"
                    v-model:idValue="id"
                    v-model:titleValue="title"
                    v-model:completedValue="completed">
    </Jsonplaceholder>
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
      title: '제목',
      userId: 11,
      id: 201,
      completed: "true"
    }
  }
}
</script>