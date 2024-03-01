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
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="addApplication.title"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <form>
      <div class="form-group">
        <label for="datepicker">Sélectionner une date :</label>
        <input type="text" class="form-control" id="datepicker" name="date" />
      </div>
      <button type="submit" class="btn btn-primary">Soumettre</button>
    </form>
  </form>
</template>
