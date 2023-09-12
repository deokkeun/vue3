<template>
  <div>Parent</div>
  <div v-if="BoardWrite">
    <BoardWrite v-model:BoardWrite="BoardWrite"/>{{ BoardWrite }}
  </div>
  <div v-else-if="!boardWrite">
    <Board v-model:BoardWrite="BoardWrite"/>{{ BoardWrite }}
  </div>

</template>

<script>
  import Board from '@/components/Board.vue';
  import BoardWrite from '@/components/BoardWrite.vue';

  export default{
    props: {
      BoardWrite: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    components: {
      Board, BoardWrite
    },
    data() {
      return {
        BoardWrite: false
      }
    }
  }


</script>