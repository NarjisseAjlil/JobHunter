import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import ApplicationsView from "../views/ApplicationsView.vue";
import AddApplicationsView from "../views/AddApplicationsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },

    {
      path: "/applications",
      name: "applications",
      component: ApplicationsView,
    },

    {
      path: "/add-application",
      name: "Add Application",
      component: AddApplicationsView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
