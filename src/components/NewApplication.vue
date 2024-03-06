<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import newApplicationInstance from "@/services/applications.js";
import ConfettiGenerator from "canvas-confetti";

let addApplication = ref({
  title: "",
  duration: "",
  statut: "",
  img: "",
  firmName: "",
  city: "",
  category: "",
});

let success = ref(null);
let error = ref(null);

async function createApplication() {
  try {
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
    showConfetti();
  } catch (err) {
    error.value = "Échec de l'ajout d'une candidature...";
  }
}

function showConfetti() {
  const confettiSettings = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 2000,
  };
  const confettiCanvas = document.getElementById("confettiCanvas");
  ConfettiGenerator(confettiCanvas, confettiSettings).fire({
    particleCount: 150,
    spread: 180,
    origin: { y: 0.6 },
  });
}

function handleFileUpload(event) {}
</script>

<template>
  <div class="col-9 position-absolute top-50 start-50 translate-middle">
    <div v-if="!success">
      <h1>Ajouter une candidature</h1>
      <!-- Create a new application -->

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

      <div class="mb-5 d-flex justify-content-center">
        <div class="d-flex flex-grow-1 mx-2">
          <button
            class="btn btn-outline-success w-100 custom-btn"
            @click="createApplication"
          >
            Ajouter
          </button>
        </div>

        <div class="d-flex flex-grow-1 mx-2">
          <button class="btn btn-outline-success w-100">
            <RouterLink
              class="text-decoration-none text-success"
              to="/applications"
              >Retour au candidatures</RouterLink
            >
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <p class="application-success">{{ success }}</p>
      <canvas
        id="confettiCanvas"
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        "
      ></canvas>
      <p>
        <RouterLink class="text-success" to="/dashboard"
          >Retour au dashboard</RouterLink
        >
      </p>
    </div>
  </div>
</template>
