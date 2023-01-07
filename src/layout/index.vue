<template>
  <div class="app-wrapper" :class="classObj">
    <div class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar, Navbar } from "./components";
import { mapState } from "vuex";

export default {
  name: "LayoutBlock",
  components: {
    AppMain,
    Sidebar,
    Navbar,
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
      // device: state => state.app.device,
      // showSettings: state => state.settings.showSettings,
      // needTagsView: state => state.settings.tagsView,
      // fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        // withoutAnimation: this.sidebar.withoutAnimation,
        // mobile: this.device === "mobile",
      };
    },
  },
};
</script>
