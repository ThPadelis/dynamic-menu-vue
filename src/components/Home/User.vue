<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h1 class="pb-2 border-bottom mb-3">Dynamic Route Matching</h1>
        <div class="card">
          <div class="card-header bg-white border-bottom">
            <h1 class="mb-0 font-italic">User {{ $route.params.id }}</h1>
          </div>
          <div class="card-body">
            <p class="mb-0">
              Very often we will need to map routes with the given pattern to
              the same component. For example we may have a
              <code>User</code> component which should be rendered for all users
              but with different user IDs.
            </p>
          </div>
          <div
            class="card-footer bg-white border-top d-flex justify-content-end"
          >
            <router-link :to="{ name: 'home' }" class="card-link text-dark"
              >Home</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dynamic-view",
  computed: {
    id() {
      let val = this.$route.params.id;
      return isNaN(val) ? 0 : val;
    },
  },
  created() {
    if (!this.id) this.$router.push("/");
  },
};
</script>

<style>
</style>