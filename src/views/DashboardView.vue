<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { annoncementGetAll } from "../services/annoncement.js";
import RecentlyAdded from "@/components/RecentlyAdded.vue";

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
  <p>Bienvenue</p>
  <RecentlyAdded></RecentlyAdded>
</template>