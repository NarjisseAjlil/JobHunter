<!-- src/components/CardApplications.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { newApplicationGetAll } from "../services/applications.js";
import { RouterLink } from "vue-router";

const newApplication = ref([]);

async function loadData() {
  let data = await newApplicationGetAll(1);
  newApplication.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <h1>Récentes candidatures</h1>
  <RouterLink class="see-all" to="/applications">Voir tout</RouterLink>
  <div class="candidatures">
    <div v-for="newApplication in newApplication">
      <div class="card">
        <div class="card-body">
          <!-- Div img + title of the card -->
          <div class="img-title">
            <img
              v-if="newApplication.img"
              :src="newApplication.img[0].signedUrl"
            />

            <h5 class="card-title text-white">{{ newApplication.title }}</h5>
          </div>

          <!-- Firm name of the card -->
          <h6 class="card-subtitle firmName">
            {{ newApplication.firmName }}
          </h6>

          <!-- Div city + category of the card -->
          <div class="city-category">
            <p class="card-text city">
              {{ newApplication.city }}
            </p>
            <p class="card-link text-white">{{ newApplication.category }}</p>
          </div>

          <!-- Div duration + statut of the card -->
          <div class="duration-statut">
            <a class="card-link text-white duration">
              {{ newApplication.duration }}</a
            >
            <a class="card-text statut">
              {{ newApplication.statut }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
