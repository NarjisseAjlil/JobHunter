<!-- src/components/RecentlyAdded.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { annoncementGetAll } from "../services/annoncement.js";

const annoncements = ref([]);
const propsToShow = [ "firmName", "city", "duration", "category"];

async function loadData() {
  let data = await annoncementGetAll();
  annoncements.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
    <h2>Ajouté récemment</h2>
    <div  v-for="annoncement in annoncements">
      <h3>{{ annoncement.title}}</h3>
      <p v-for="prop in propsToShow" :key="prop">{{ annoncement[prop] }}</p>
    </div>
</template>
