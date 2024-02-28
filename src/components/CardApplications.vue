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
  <div v-for="annoncement in annoncements">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ annoncement.title }}</h5>
        <h6 class="card-subtitle mb-2 .text-success firmName">
          {{ annoncement.firmName }}
        </h6>
        <p class="card-text city">
          {{ annoncement.city }}
        </p>
        <p class="card-text category">
          {{ annoncement.category }}
        </p>
        <p class="card-text statut">
          {{ annoncement.statut }}
        </p>

        <p class="card-text">
          {{ annoncement.duration }}
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>
