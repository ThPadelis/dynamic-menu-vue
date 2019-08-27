<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h1 class="pb-2 border-bottom mb-3">Home</h1>
        <div class="card">
          <div class="card-header bg-white border-bottom">
            <h1 class="mb-0 font-italic">Why I wrote this article?</h1>
          </div>
          <div class="card-body">
            <p
              class="mb-0"
            >The main idea came to life when I was developing a side project and I had to create too many routes and child routes too. So, I decided to create this tutorial to show you how I solved my problem.</p>
          </div>
          <div class="card-footer bg-white border-top d-flex justify-content-end">
            <a
              href="https://dev.to/thpadelis/dynamic-menu-in-vue-1cc9"
              class="card-link text-dark"
            >Read out more</a>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
</style>