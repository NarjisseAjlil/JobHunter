<!-- src/components/CardApplications.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { annoncementGetAll } from "../services/annoncement.js";

const annoncements = ref([]);

async function loadData() {
  let data = await annoncementGetAll();
  annoncements.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="all-applications">
    <div v-for="annoncement in annoncements">
      <div class="card">
        <div class="card-body">
          <img v-if="annoncement.img" :src="annoncement.img[0].signedUrl" />

          <h5 class="card-title text-white">{{ annoncement.title }}</h5>
          <h6 class="card-subtitle firmName">
            {{ annoncement.firmName }}
          </h6>
          <p class="card-text city">
            {{ annoncement.city }}
          </p>

          <p class="card-link text-white">{{ annoncement.category }}</p>

          <a class="card-link text-white duration">
            {{ annoncement.duration }}</a
          >
          <a class="card-text statut">
            {{ annoncement.statut }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
