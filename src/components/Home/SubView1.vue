<template>
  <div class="card">
    <div class="card-header bg-white border-bottom">
      <h1 class="mb-0 font-italic">What is Lorem Ipsum?</h1>
    </div>
    <div class="card-body">
      <p
        class="mb-0"
      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class="card-footer bg-white border-top d-flex justify-content-end">
      <router-link :to="{name: 'sub-view-2'}" class="card-link text-dark">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "sub-view-1"
};
</script>

<style>
</style>