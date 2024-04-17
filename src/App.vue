<script setup>
// src/App.vue
import { RouterLink, RouterView } from "vue-router";

import { useStore } from "./stores/user";
import { computed } from "vue";
// const userInfo = computed(() => {
//   return useStore().getUser;
// });
</script>

<template>
  <header class="mt-2">
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <p class="h2 mt-2 text-success">JobHunter</p>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <p
              class="h2 text-success offcanvas-title"
              id="jobHunterNavbarLabel"
            >
              JobHunter
            </p>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link"
                  ><RouterLink class="text-decoration-none text-white" to="/"
                    >Accueil</RouterLink
                  ></a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RouterLink
                    class="text-decoration-none text-white"
                    to="/sign-up"
                    >Inscription</RouterLink
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RouterLink
                    class="text-decoration-none text-white"
                    to="/login"
                    >Connexion</RouterLink
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RouterLink
                    class="text-decoration-none text-white"
                    to="/dashboard"
                    >Dashboard</RouterLink
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RouterLink
                    class="text-decoration-none text-white"
                    to="/formAnnoncement"
                    >Annonces</RouterLink
                  >
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RouterLink
                    class="text-decoration-none text-white"
                    to="/profile"
                    >Profil</RouterLink
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>
