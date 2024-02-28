<script setup>
// src/views/LoginView.vue

import { ref } from "vue";

import userInstance from "@/services/user.js";
import { cryptPassword } from "@/services/utils.js";
import { useStore } from "@/stores/user.js";

let form = ref({
  email: "narjisse.ajlil@gmail.com",
  password: "coucou",
  name: "Narjisse",
});

let error = ref(null);
let success = ref(null);

async function createAccount() {
  console.clear();
  console.log(form.value);
  error.value = null;
  success.value = null;

  let user = await userInstance.exists(form.value.email);
  if (user.list.length > 0) {
    error.value = "User exists";
    return false;
  }

  let data = await userInstance.create(
    form.value.email,
    cryptPassword(form.value.password),
    form.value.name
  );
  success.value = "User created";
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
}

async function logout() {
  useStore().setUser(null);
}
</script>

<template>
  <h1>Login</h1>

  <p v-if="error">ERREUR !!!!!! :{{ error }}</p>
  <p v-if="success">SUCESS !!!!!! :{{ success }}</p>

  <p>email<input type="text" v-model="form.email" /></p>
  <p>Password<input type="Password" v-model="form.password" /></p>
  <p>Name<input type="text" v-model="form.name" /></p>

  <p>
    <button @click="createAccount">Create</button>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </p>
</template>
