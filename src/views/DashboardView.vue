<script setup>
// src/views/HomeView.vue
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
  <h1>Dashboard</h1>
  {{ annoncements }}
</template>
