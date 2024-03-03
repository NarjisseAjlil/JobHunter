<!-- src/components/RecentlyAdded.vue -->

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
  <p class="mt-5 recently-added-text">Ajouté récemment</p>
  <div>
    <div class="annoncement mb-1" v-for="annoncement in annoncements">
      <a
        class="link-offset-2 link-underline link-underline-opacity-0"
        :href="annoncement.url"
      >
        <!-- Div logo + title of the card -->
        <div class="card-body">
          <div class="annoncement-img-title">
            <img v-if="annoncement.logo" :src="annoncement.logo[0].signedUrl" />

            <h5 class="card-title text-white">{{ annoncement.title }}</h5>
          </div>

          <!-- firm name -->

          <p class="card-text annoncement-firmName">
            {{ annoncement.firmName }}
          </p>

          <!-- Div city + category of the card -->
          <div class="city-category">
            <p class="card-text city">
              {{ annoncement.city }}
            </p>
            <li class="card-link text-success annoncement-category">
              {{ annoncement.categories }}
            </li>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
