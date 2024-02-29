<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { annoncementGetAll } from "../services/annoncement.js";
import NewApplication from "@/components/NewApplication.vue";

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
  <NewApplication></NewApplication>
</template>
