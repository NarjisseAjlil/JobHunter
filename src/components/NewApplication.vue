<script setup>
// src/views/NewApplication.vue

import { ref } from "vue";
import newApplicationInstance from "@/services/applications.js";

let addApplication = ref({
  title: "qwerty@gmail.com",
  duration: "coucou",
  statut: "En attente",
  img: "Narjisse",
  firmName: "OpenAI",
  city: "Shanghai",
  category: "Sur site, Stage",
});

let success = ref(null);

async function createApplication() {
  let data = await newApplicationInstance.create(
    newApplication.value.title,
    newApplication.value.duration,
    newApplication.value.statut,
    newApplication.value.title,
    newApplication.value.img,
    newApplication.value.firmName,
    newApplication.value.city,
    newApplication.value.category
  );
  success.value = "Candidature ajoutée !";
}
</script>

<template>
  <h1>Ajouter une candidature</h1>
  <form>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="addApplication.title"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword text-danger">Password</label>
    </div>
  </form>
</template>
