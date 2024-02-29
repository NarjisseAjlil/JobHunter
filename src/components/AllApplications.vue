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
  <div class="all-applications">
    <RouterLink to="/add-application"
      ><i class="bi bi-plus-circle-fill"></i
    ></RouterLink>
    <div v-for="newApplication in newApplication">
      <div class="card">
        <div class="card-body">
          <img
            v-if="newApplication.img"
            :src="newApplication.img[0].signedUrl"
          />

          <h5 class="card-title text-white">{{ newApplication.title }}</h5>
          <h6 class="card-subtitle firmName">
            {{ newApplication.firmName }}
          </h6>
          <p class="card-text city">
            {{ newApplication.city }}
          </p>

          <p class="card-link text-white">{{ newApplication.category }}</p>

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
</template>
