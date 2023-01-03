import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/layout";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/",
      component: Layout,
      redirect: "/profile",
      children: [
        {
          path: "profile",
          component: () => import("@/views/AboutView.vue"),
          name: "about",
          meta: { title: "profile", icon: "profile", affix: true },
        },
      ],
    },
  ],
});

export default router;
