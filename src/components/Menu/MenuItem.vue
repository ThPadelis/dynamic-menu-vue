<template>
  <div>
    <li v-if="isVisible" class="nav-item rounded shadow-sm mb-2">
      <router-link
        exact-active-class="text-success"
        :to="{
          name: route.name,
          params: { id: isRandom ? id : isSpecific ? 1 : null },
        }"
        class="nav-link"
        >{{ name }}</router-link
      >
    </li>

    <div v-if="route.children && route.children.length">
      <menu-item
        v-for="(r, i) in route.children"
        :key="i"
        :route="r"
        class="ml-3"
      ></menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    route: {
      type: Object,
    },
  },
  computed: {
    isVisible() {
      if (
        this.route.meta &&
        (this.route.meta.visible === undefined || this.route.meta.visible)
      ) {
        return true;
      }
      return false;
    },
    name() {
      return this.route.name
        .toLowerCase()
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
    },
    isUserID() {
      return this.route.name === "user";
    },
    isRandom() {
      return this.route.name === "user";
    },
    isSpecific() {
      return this.route.name === "user-specific";
    },
    id() {
      return Math.floor(Math.random() * 100);
    },
  },
};
</script>
