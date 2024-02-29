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
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <!-- <div class="candidatures">
    <div v-for="annoncement in annoncements">
      <div class="card">
        <div class="card-body">
          <img v-if="annoncement.img" :src="annoncement.img[0].signedUrl" />
        </div>
      </div>
    </div>
  </div> -->
</template>
