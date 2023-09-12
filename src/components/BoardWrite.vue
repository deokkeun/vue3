<template>
  <table border="1" align="center">
    <thead>
    </thead>
    <tbody class="boardWrite">
      <tr>
        <th>No</th>
        <td>게시글 번호</td>
      </tr>
      <tr>
        <th>Type</th>
        <td>
          <select name="" id="">
            <option value="">일반</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>title</th>
        <td>
          <input type="text">
        </td>
      </tr>
      <tr>
        <th>content</th>
        <td>
          <textarea name="" id="" cols="100%" rows="20"></textarea>
        </td>
      </tr>
    </tbody>
  </table>
  <button @click="$emit('update:BoardWrite', false)">이전으로</button>
</template>

<style>
.boardWrite tr th {
  width: 50px;
}
.boardWrite tr td {
  width: 500px;
  display: flex;
  align-items: left;
}
</style>

<script>
export default{
  data() {
    return{

    }
  }
}
</script>