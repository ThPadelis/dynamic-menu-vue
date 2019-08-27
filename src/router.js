import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/dynamic-menu-vue/",
  routes: [
    {
      path: "/",
      redirect: { path: "/home" },
      meta: {
        visible: false
      }
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Home.vue"),
      meta: {
        visible: true
      },
      children: [
        {
          path: "sub-view-1",
          name: "sub-view-1",
          component: () =>
            import(
              /* webpackChunkName: "home-sub-view-1" */ "./components/Home/SubView1.vue"
            ),
          meta: {
            visible: true
          }
        },
        {
          path: "sub-view-2",
          name: "sub-view-2",
          component: () =>
            import(
              /* webpackChunkName: "home-sub-view-2" */ "./components/Home/SubView2.vue"
            ),
          meta: {
            visible: true
          }
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        visible: true
      }
    },
    {
      path: "*",
      name: "not-found",
      component: () =>
        import(/* webpackChunkName: "not-found" */ "./views/NotFound.vue"),
      meta: {
        visible: false
      }
    }
  ]
});
