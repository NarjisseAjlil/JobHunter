<!-- src/components/AllApplications.vue -->

<script setup>
import { ref, onMounted } from "vue";
import { websiteGetAll } from "../services/website.js";

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
  <h1 class="text-center mt-5 mb-5">Nos partenaires affiliés</h1>

  <div v-for="website in websites">
    <div class="card">
        <div class="row g-0">
            <div class="col-md-4">
                <img class="img-fluid rounded-start"
                    v-if="website.img"
                    :src="website.img[0].signedUrl"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-white">{{ website.title }}</h5>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
