<!-- src/components/RecentlyAdded.vue -->

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
  <h2 class="mt-4">Ajouté récemment</h2>
    <div class="card mb-1" v-for="annoncement in annoncements">
      <a class="link-offset-2 link-underline link-underline-opacity-0" :href=" annoncement.url">
      <p class="card-header">{{ annoncement.title}}</p>
      <div class="card-body">
        <p class="card-text firmName"> {{ annoncement.firmName}}</p>
        <p class="card-text city"> {{ annoncement.city}}</p>
        <p class="card-text category"> {{ annoncement.categories}}</p>
      </div>
      </a>
    </div>
</template>
