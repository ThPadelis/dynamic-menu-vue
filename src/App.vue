<template>
  <div class="container-fluid">
    <div class="row min-vh-100">
      <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 border-right">
        <navbar></navbar>
      </div>
      <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    Navbar: () =>
      import(/* webpackChunkName: "navbar" */ "./components/Menu/Navbar")
  }
};
</script>
