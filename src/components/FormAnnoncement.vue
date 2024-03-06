<script setup>
import { ref } from "vue";
import formInstance from "@/services/form.js";
import ConfettiGenerator from "canvas-confetti";

let success = ref(null);

let form = ref({
  title: "",
  url: "",
  salary: "",
  firmName: "",
  city: "",
  // categories: ["Stage","Sur site"],
  logo: "",
});

async function createAnnoncement() {
  console.clear();
  console.log(form.value);
  success.value = null;

  let data = await formInstance.create(
    form.value.title,
    form.value.url,
    form.value.salary,
    form.value.firmName,
    form.value.city,
    // form.value.categories,
    form.value.logo
  );
  success.value = "Annonce ajoutée !";
  showConfetti();
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
</script>
<template>
  <div class="col-9 position-absolute top-50 start-50 translate-middle">
    <div v-if="!success">
      <h1 class="mb-5 text-center">Créer une annonce</h1>
      <div class="mb-3">
        <label class="form-label">Titre</label>
        <input type="text" class="form-control" v-model="form.title" />
      </div>

      <div class="mb-3">
        <label class="form-label">URL</label>
        <input type="text" class="form-control" v-model="form.url" />
      </div>

      <div class="col mb-3">
        <label class="form-label">Salaire</label>
        <input type="text" class="form-control" v-model="form.salary" />
      </div>

      <div class="row g-1">
        <div class="col mb-3">
          <label class="form-label">Entreprise</label>
          <input type="text" class="form-control" v-model="form.firmName" />
        </div>

        <div class="col mb-3">
          <label class="form-label">Ville</label>
          <input type="text" class="form-control" v-model="form.city" />
        </div>
      </div>

      <!-- <div class="mb-3">
      <label class="form-label">Categories</label>
      <select class="form-select" v-model="form.categories" multiple>
        <option value="Alternance">Alternance</option>
        <option value="Stage">Stage</option>
        <option value="Télétravail">Télétravail</option>
        <option value="Sur site">Sur site</option>
      </select>
    </div> -->

      <div class="mb-3">
        <label for="formFile" class="form-label">Logo</label>
        <input class="form-control" type="file" id="formFile" />
      </div>

      <div class="mb-5 d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-success" @click="createAnnoncement">
          Créer une annonce
        </button>
      </div>
    </div>

    <div v-else class="text-center">
      <h1>{{ success }}</h1>

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
