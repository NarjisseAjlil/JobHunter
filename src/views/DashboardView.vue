<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { newApplicationGetAll } from "../services/applications.js";
import { annoncementGetAll } from "../services/annoncement.js";

import CardApplications from "@/components/CardApplications.vue";
import RecentlyAdded from "@/components/RecentlyAdded.vue";


const annoncements = ref([]);

async function loadData() {
  let dataAnnoncement = await annoncementGetAll();
  annoncements.value = dataAnnoncement.list;
  let dataApplication = await newApplicationGetAll();
  newApplicationGetAll.value = dataApplication.list;
};

onMounted(() => {
  loadData();
});

</script>

<template>
  <h1>Dashboard</h1>
  <p>Bienvenue</p>
  <CardApplications></CardApplications>
  <RecentlyAdded></RecentlyAdded>
</template>