<script setup>
// src/views/Dashboard.vue
import { ref, onMounted, computed } from "vue";
import { newApplicationGetAll } from "../services/applications.js";
import { annoncementGetAll } from "../services/annoncement.js";
import { useStore } from "@/stores/user";
import CardApplications from "@/components/CardApplications.vue";
import RecentlyAdded from "@/components/RecentlyAdded.vue";

const annoncements = ref([]);

const userInfo = computed(() => {
  return useStore().getUser;
})

async function loadData() {
  let dataAnnoncement = await annoncementGetAll();
  annoncements.value = dataAnnoncement.list;
  let dataApplication = await newApplicationGetAll();
  newApplicationGetAll.value = dataApplication.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="added-text">
    <p class="h2 mb-4 text-success">JobHunter</p>
    <p>Bienvenue</p>
    <h3 class="mb-5">{{ userInfo.name }}</h3>
  </div>
  <CardApplications></CardApplications>
  <RecentlyAdded></RecentlyAdded>
</template>
