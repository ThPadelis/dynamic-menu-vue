<template>
  <div class="card">
    <div class="card-header bg-white border-bottom">
      <h1 class="mb-0 font-italic">Why do we use it?</h1>
    </div>
    <div class="card-body">
      <p class="mb-0">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
    <div class="card-footer bg-white border-top d-flex justify-content-end">
      <router-link
        :to="{ name: 'user', params: { id } }"
        class="card-link text-dark"
        >Random user</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "sub-view-2",
  computed: {
    id() {
      return Math.floor(Math.random() * 100);
    },
  },
};
</script>

<style>
</style>