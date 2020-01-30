<template lang="html">
  <div v-if="loading" class="preloader">
    <div class="inner">
      <img src="/img/logo.png" alt="Olakunle Boye">
      <span>Ola is thinkin</span>
      <div class="progress-bar">
        <div class="progress-bar_bg">
          <div style="width: 50%;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  mounted(){
    //setInterval(this.isLoading, 100);
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  },
  computed: {
    loadingIndicator() {
      //return this.$root.$loading.get()
    }
  }
}
</script>

<style scoped>
  
</style>
