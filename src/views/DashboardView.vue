<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { newApplicationGetAll } from "../services/applications.js";
import { annoncementGetAll } from "../services/annoncement.js";

import CardApplications from "@/components/CardApplications.vue";
import RecentlyAdded from "@/components/RecentlyAdded.vue";
// import { useStore } from "@/stores/user.js";


const annoncements = ref([]);

async function loadData() {
  let data = await annoncementGetAll();
  annoncements.value = data.list;
}

onMounted(() => {
  loadData();
});

// useStore().setUser(user.list[0]);

</script>

<template>
  <h1>Dashboard</h1>
  <p>Bienvenue</p>
  <CardApplications></CardApplications>
  <RecentlyAdded></RecentlyAdded>
</template>