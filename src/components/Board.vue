<template>
  <div class="container">
    <div class="sub-container">
      <div>
        <a href="">login</a> / 
        <a href="">join</a>
      </div>
      <div>total</div>
    </div>
  </div>
  <table border="1" align="center">
    <thead>
      <tr>
        <th width="100">Type</th>
        <th width="50">No</th>
        <th width="400">Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          Type
        </td>
        <td>
          No
        </td>
        <td align="left">
          <a href="">Link</a>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="container">
    <div class="sub-container">
      <div class="container">
        <div v-for="t in type">
          <label>
            <input type="checkBox">{{ t.name }}
          </label>
        </div>
        <button>조회</button>
      </div>
      <div>
        <button @click="$emit('update:BoardWrite', true)">글쓰기</button>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
}
.sub-container {
  width: 550px;
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default{
  data() {
    return {
      type: [
        {id: 't00', name: '전체'},
        {id: 't01', name: '일반'},
        {id: 't02', name: 'Q&A'},
        {id: 't03', name: '익명'},
        {id: 't04', name: '자유'}
      ]
    }
  }
}
</script>