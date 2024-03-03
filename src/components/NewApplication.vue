<script setup>
// src/views/NewApplication.vue

import { ref } from "vue";
import newApplicationInstance from "@/services/applications.js";

let addApplication = ref({
  title: "",
  duration: "",
  statut: "",
  img: "",
  firmName: "",
  city: "",
  category: "",

  methods: {
    createApplication() {
      this.success = true;
      this.error = true;
    },
    handleFileUpload(event) {},
  },
});

let success = ref(null);
let error = ref(null);

async function createApplication() {
  let data = await newApplicationInstance.create(
    addApplication.value.title,
    addApplication.value.duration,
    addApplication.value.statut,
    addApplication.value.img,
    addApplication.value.firmName,
    addApplication.value.city,
    addApplication.value.category
  );
  success.value = "Candidature ajoutée !";
  error.value = "TES UN GROS CACA !";
}
</script>

<template>
  <div>
    <div v-if="!success">
      <h1>Ajouter une candidature</h1>
      <!-- create a new application -->

      <div class="mb-3">
        <label for="title" class="form-label">Titre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          aria-describedby="emailHelp"
          v-model="addApplication.title"
        />
      </div>

      <div class="mb-3">
        <label for="firmName" class="form-label">Entreprise</label>
        <input
          type="text"
          class="form-control"
          id="firmName"
          aria-describedby="emailHelp"
          v-model="addApplication.firmName"
        />
      </div>

      <div class="mb-3">
        <label for="city" class="form-label">Ville</label>
        <input
          type="text"
          class="form-control"
          id="city"
          aria-describedby="emailHelp"
          v-model="addApplication.city"
        />
      </div>

      <div class="mb-3">
        <label for="date" class="form-label">Date de candidature</label>
        <input
          type="date"
          class="form-control"
          id="date"
          aria-describedby="emailHelp"
          v-model="addApplication.duration"
        />
      </div>

      <div class="mb-3">
        <label for="logo" class="form-label">Logo</label>
        <input
          type="file"
          class="form-control"
          id="logo"
          accept="image/*"
          @change="handleFileUpload"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Statut</label>
        <select class="form-select" v-model="addApplication.statut">
          <option value="En attente">En attente</option>
          <option value="refusé">Refusé</option>
          <option value="Entretien planifié">Entretien planifié</option>
          <option value="Accepté">Accepté</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Catégorie</label>
        <select class="form-select" v-model="addApplication.category">
          <option value="Stage">Stage</option>
          <option value="Alternance">Alternance</option>
          <option value="Sur site">Sur site</option>
          <option value="Télétravail">Télétravail</option>
        </select>
      </div>

      <div class="mb-5 d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-success" @click="createApplication">
          Ajouter une candidature
        </button>
      </div>
    </div>

    <div v-if="success" class="text-center">
      <h1>{{ success }}</h1>
      <RouterLink to="/dashboard">Retour au dashboard</RouterLink>
    </div>
    <div v-if="error"></div>
  </div>
</template>
