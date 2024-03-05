<script setup>
// src/views/LoginView.vue

import { ref } from "vue";

import userInstance from "@/services/user.js";
import { cryptPassword } from "@/services/utils.js";
import { useStore } from "@/stores/user.js";

let form = ref({
  email: "qwerty@gmail.com",
  password: "coucou",
});

let error = ref(null);
let success = ref(null);

import router from "@/router";

function redirectToAnotherPage() {
  router.push("/dashboard");
}

async function login() {
  error.value = null;
  success.value = null;

  let user = await userInstance.login(
    form.value.email,
    cryptPassword(form.value.password)
  );
  if (user.list.length != 1) {
    error.value = "User non trouvé";
    return false;
  }
  useStore().setUser(user.list[0]);

  success.value = "Bonjour" + user.list[0].name;

  redirectToAnotherPage();
}

async function logout() {
  useStore().setUser(null);
}
</script>

<template>
  <p class="h3 mt-5 mb-3 text-center text-success">JobHunter</p>
  <h1 class="text-center">Bienvenue !</h1>
  <div class="col-7 position-absolute top-50 start-50 translate-middle">
    <p v-if="error">ERREUR !!!!!! :{{ error }}</p>

    <div class="mt-5 mb-3 justify-content-center">
      <div class="col-auto">
        <label class="col-form-label">Email :</label>
      </div>
      <div class="col-auto">
        <input type="text" class="form-control" v-model="form.email" />
      </div>
    </div>

    <div class="mb-3 justify-content-center">
      <div class="col-auto">
        <label class="col-form-label">Mot de passe :</label>
      </div>
      <div class="col-auto">
        <input type="password" class="form-control" v-model="form.password" />
      </div>
    </div>

    <p class="mt-4 d-grid col-9 mx-auto">
      <button class="btn btn-outline-success" @click="login">Connexion</button>
    </p>
    <p class="mt-5 text-center">
      Vous n'avez pas de compte ?
      <a href="/sign-up" class="link-success"> S'inscrire</a>
    </p>
  </div>
</template>
