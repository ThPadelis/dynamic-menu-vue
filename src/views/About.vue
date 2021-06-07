<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h1 class="pb-2 border-bottom mb-3">About me</h1>
        <div class="card">
          <div class="card-header bg-white border-bottom">
            <h1 class="mb-0 font-italic">How am I?</h1>
          </div>
          <div class="card-body">
            <p
              class="mb-0"
            >I'm passionate about learning the latest and greatest technologies whether that's the frontend or backend. I enjoy creating sleek and responsive applications in addition to being user-friendly. A versatile engineer with interests in Web Development. Adaptable and self-motivated learner. Interested in new programming technologies, and continuous self-improvement. I am currently open to opportunities within the web development discipline and if you feel like we would be a great match, I'd love to hear from you!</p>
          </div>
          <div class="card-footer bg-white border-top d-flex align-items-center">
            <p class="mb-0 mr-2">Find me on socials</p>
            <div>
              <a href="https://dev.to/thpadelis">
                <img
                  class="mr-2"
                  :src="require('../assets/icons/icons8-dev-post-50.png')"
                  height="24"
                  width="24"
                />
              </a>
              <a href="https://twitter.com/ThPadelis">
                <img
                  class="mr-2"
                  :src="require('../assets/icons/icons8-twitter-50.png')"
                  height="24"
                  width="24"
                />
              </a>
              <a href="https://github.com/ThPadelis">
                <img
                  class="mr-2"
                  :src="require('../assets/icons/icons8-github-50.png')"
                  height="24"
                  width="24"
                />
              </a>
              <a href="hhttps://www.facebook.com/padelis.theodosiou">
                <img
                  class="mr-2"
                  :src="require('../assets/icons/icons8-facebook-50.png')"
                  height="24"
                  width="24"
                />
              </a>
              <a href="https://www.instagram.com/padelis_theodosiou/">
                <img
                  class="mr-2"
                  :src="require('../assets/icons/icons8-instagram-50.png')"
                  height="24"
                  width="24"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style>
</style>