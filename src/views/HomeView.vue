<script setup>
// src/views/HomeView.vue
import { ref, onMounted } from "vue";
import { websiteGetAll } from "../services/website.js";
import Website from "@/components/Website.vue";

const websites = ref([]);

async function loadData() {
  let data = await websiteGetAll();
  websites.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="text-center">
    <p class="h1 mb-5 text-success">JobHunter</p>
  </div>
    <div class="col-9 text-center all">
      <h2 class=" mb-5">Stage optimisé, suivi simplifié.</h2>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
  <Website></Website>
</template>
