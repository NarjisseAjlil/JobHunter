<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { annoncementGetAll } from "../services/annoncement.js";
import AllApplications from "@/components/AllApplications.vue";

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
  <AllApplications></AllApplications>
</template>
