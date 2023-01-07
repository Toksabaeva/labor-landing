<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["sidebar"]),
  },
  components: {
    Hamburger,
  },
  methods: {
    toggleSideBar() {
      console.log("toggleClick toggleSideBar navbar");
      this.$store.dispatch("app/toggleSideBar");
      console.log(this.sidebar.opened);
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      //   this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>
