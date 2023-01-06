<template>
  <div class="app-wrapper">
    <div class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar } from "./components";

export default {
  name: "LayoutBlock",
  components: {
    AppMain,
    Sidebar,
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>
