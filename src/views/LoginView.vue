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

function redirectToAnotherPage() {
  window.location.href = '/dashboard';
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
  <div class="card text-center align-items-center">
    <h1 class="text-center">Login</h1>

    <p v-if="error">ERREUR !!!!!! :{{ error }}</p>

    <div class="row g-3 align-items-center mb-2">
      <div class="col-auto">
        <label class="col-form-label">Email</label>
      </div>
      <div class="col-auto">
        <input type="text" class="form-control" v-model="form.email">
      </div>
    </div>

    <div class="row g-3 align-items-center mb-2">
      <div class="col-auto">
        <label class="col-form-label">Password</label>
      </div>
      <div class="col-auto">
        <input type="password"  class="form-control" v-model="form.password">
      </div>
    </div>

    <p>
      <button class="btn btn-outline-success" @click="login">Login</button>
      <button class="btn btn-outline-success" @click="logout">Logout</button>

    </p>
    <p class="">Don’t have an account ?<a href="/sign-up">Sign-up</a></p>
  </div>
  
</template>
