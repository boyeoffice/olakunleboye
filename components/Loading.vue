<template lang="html">
  <div class="preloader">
    <div class="inner">
      <h4>OB</h4>
      <span>Ola is thinkin</span>
      <div class="progress">
        <div class="progress-bar"
             role="progressbar"
             aria-valuenow=""
             aria-valuemin="0"
             aria-valuemax="100"
             :style="{width: loadingIndicator + '%'}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  mounted(){
    //setInterval(this.isLoading, 100);
  },
  methods: {
  },
  computed: {
    loadingIndicator() {
      return this.$root.$loading.get()
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
