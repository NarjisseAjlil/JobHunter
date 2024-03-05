<!-- src/components/AllApplications.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { newApplicationGetAll } from "../services/applications.js";

const newApplication = ref([]);

async function loadData() {
  let data = await newApplicationGetAll();
  newApplication.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <h1 class="text-center mt-20">Mes candidatures</h1>

  <!-- icon link to other pages -->

  <div class="all-applications-cta">
    <RouterLink to="/dashboard"
      ><i class="bi bi-arrow-left-short"></i
    ></RouterLink>

    <RouterLink to="/add-application"><i class="bi bi-plus-lg"></i></RouterLink>
  </div>

  <div v-for="newApplication in newApplication">
    <div class="card all-applications">
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
        <p class="card-subtitle firmName">
          {{ newApplication.firmName }}
        </p>

        <!-- Div city + category of the card -->
        <div class="city-category">
          <p class="card-text city">
            {{ newApplication.city }}
          </p>
          <li class="card-link text-white">{{ newApplication.category }}</li>
        </div>

        <!-- Div duration + statut of the card -->
        <div class="duration-statut">
          <p class="card-text text-white duration">
            {{ newApplication.duration }}
          </p>
          <p class="card-link statut">
            {{ newApplication.statut }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
