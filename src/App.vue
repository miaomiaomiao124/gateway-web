<template>
  <div id="app">
    <router-view />

  </div>
</template>

<script>
export default {
  name: "App",
  created () {
    window.topath = this.$router;
  }
};
</script>

<style>
.fade-transverse-leave-active,
.fade-transverse-enter-active {
  transition: all 0.5s;
}
.fade-transverse-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transverse-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
