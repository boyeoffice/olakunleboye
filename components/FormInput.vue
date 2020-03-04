<template lang="html">
  <input :type="formType" :value="value" class="form-control b-control" :placeholder="placeHolder">
</template>

<script>
export default {
  props: {
    formType: String,
    placeHolder: String,
    value: String
  }
}
</script>

<style lang="css" scoped>
</style>
