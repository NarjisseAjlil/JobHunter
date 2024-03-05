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
  <Website></Website>
</template>
