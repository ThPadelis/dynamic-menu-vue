<template>
  <nav class="nav flex-column p-3">
    <menu-item v-for="(r, i) in routes" :key="i" :route="r"></menu-item>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  components: {
    MenuItem: () => import(/* webpackChunkName: "menu-item" */ "./MenuItem"),
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style>
</style>