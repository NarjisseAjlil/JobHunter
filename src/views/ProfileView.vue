<script setup>
import { ref, computed } from "vue";
import { useStore } from "@/stores/user.js";
import cvInstance from "@/services/cv.js";
import ConfettiGenerator from "canvas-confetti";


const userInfo = computed(() => {
  return useStore().getUser;
});
const user_id = userInfo.value.id;

let form = ref({
  cv: "cv",
  coverLetter: "coverLetter",
});

import router from "@/router";

function redirectToAnotherPage() {
  router.push("/login");
}

async function update() {

  try {
    await cvInstance.create(
      form.value.cv,
      form.value.coverLetter,
      user_id
    );
    showConfetti();
  } catch (error) {
    console.error("Erreur lors de la mise à jour du CV :", error);
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

async function logout() {
  useStore().setUser(null);
  redirectToAnotherPage();
}
</script>

<template>
  <div class="mt-5 text-center">
    <h1>{{ userInfo.name }}</h1>
    <p>{{ userInfo.email }}</p>

  </div>

  <div class="col-9 position-absolute top-50 start-50 translate-middle">
    <div class="mb-5">
      <label for="cvInput" class="form-label">CV :</label>
      <input v-model="form.cv" class="form-control" type="text" id="cvInput">
    </div>

    <div class="mb-3">
      <label for="coverLetterInput" class="form-label">Lettre de motivation :</label>
      <input v-model="form.coverLetter" class="form-control" type="text" id="coverLetterInput">
    </div>

    <p class="d-grid gap-2 col-6 mx-auto mb-5">
      <button class="btn btn-outline-success" @click="update">Mettre à Jour</button>
    </p>
    <p class="d-grid gap-2 col-6 mx-auto mt-5">
      <button class="btn btn-outline-danger" @click="logout">Déconnexion</button>
    </p>
  </div>
</template>