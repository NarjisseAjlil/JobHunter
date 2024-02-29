<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { newApplicationGetAll } from "../services/applications.js";
import { annoncementGetAll } from "../services/annoncement.js";

import CardApplications from "@/components/CardApplications.vue";

// const newApplication = ref([]);

// async function loadData() {
//   let dataApplications = await newApplicationGetAll();
//   newApplication.value = dataApplications.list;

//   let dataAnnoncement = await annoncementGetAll();
//   annoncement.value = dataAnnoncement.list;
// }

// onMounted(() => {
//   loadData();
// });
</script>

<template>
  <CardApplications></CardApplications>
</template>
