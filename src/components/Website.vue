<!-- src/components/AllApplications.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { websiteGetAll } from "../services/website.js";

const websites = ref([]);

async function loadData() {
  let data = await websiteGetAll();
  websites.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="text-center all">
    <h2 class="mt-5">Stage optimisé, suivi simplifié.</h2>
    <div class="mt-5 d-flex justify-content-evenly">
      <button class="btn btn-outline-success">
        <RouterLink class="text-decoration-none text-success" to="/sign-up"
          >Inscription</RouterLink
        >
      </button>

      <button class="btn btn-outline-success">
        <RouterLink class="text-decoration-none text-success" to="/login"
          >Connexion</RouterLink
        >
      </button>
    </div>
  </div>

  <h1 class="text-center mt-2">Nos partenaires affiliés</h1>

  <div v-for="website in websites">
    <div class="home-card mb-4">
      <div class="home-card-img-title">
        <img
          class="img-title"
          v-if="website.img"
          :src="website.img[0].signedUrl"
        />

        <p class="mt-2">
          {{ website.description }}

          <button class="mt-3 btn btn-outline-success">
            Visiter {{ url }} <i class="bi bi-arrow-right"></i>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
