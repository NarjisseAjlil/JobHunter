<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { newApplicationGetAll } from "../services/applications.js";
import NewApplication from "@/components/NewApplication.vue";

// const newApplication = ref([]);

// async function loadData() {
//   let data = await newApplicationGetAll();
//   newApplication.value = data.list;
// }

// onMounted(() => {
//   loadData();
// });
</script>

<template>
  <NewApplication></NewApplication>
</template>
