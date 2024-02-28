<!-- src/components/RecentlyAdded.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { annoncementGetAll } from "../services/annoncement.js";

const annoncements = ref([]);
const propsToShow = [ "firmName", "city", "duration", "category"];

async function loadData() {
  let data = await annoncementGetAll();
  annoncements.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <h2 class="mt-4">Ajouté récemment</h2>
    <div class="card mb-1" v-for="annoncement in annoncements">
      <p class="card-header">{{ annoncement.title}}</p>
      <div class="card-body">
        <p class="card-text firmName"> {{ annoncement.firmName}}</p>
        <p class="card-text city"> {{ annoncement.city}}</p>
        <p class="card-text category"> {{ annoncement.category}}</p>

      </div>
    </div>
</template>
