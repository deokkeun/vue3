<template>
  <div>
      <label for="">Name {{ value }}</label>
      <input type="text"
      :value="modelValue"
      @input="$emit('update:modelValue',$event.target.value)"
      >
  </div>
</template>

<script>
export default {
  props:{
    modelValue:{
          type:String,
          required:true
      }
  }
}
</script>