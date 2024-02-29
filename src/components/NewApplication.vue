<!-- src/components/NewApplication.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { annoncementGetAll } from "../services/annoncement.js";

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
  <div class="candidatures">
    <div v-for="annoncement in annoncements">
      <div class="card">
        <div class="card-body">
          <img v-if="annoncement.img" :src="annoncement.img[0].signedUrl" />
        </div>
      </div>
    </div>
  </div>
</template>
