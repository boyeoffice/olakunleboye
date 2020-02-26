<template lang="html">
  <input :type="formType" class="form-control" :placeholder="placeHolder">
</template>

<script>
export default {
  props: {
    formType: String,
    placeHolder: String

  }
}
</script>

<style lang="css" scoped>
</style>
