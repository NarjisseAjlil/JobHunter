import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import ApplicationsView from "../views/ApplicationsView.vue";
import AddApplicationsView from "../views/AddApplicationsView.vue";
import SignUpView from "../views/SignUpView.vue";
import AnnoncementView from "../views/AnnoncementView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
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
      path: "/formAnnoncement",
      name: "formAnnoncement",
      component: AnnoncementView,
    },
  ],
});

export default router;
