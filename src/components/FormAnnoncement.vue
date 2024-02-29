<script setup>
import { ref } from "vue";
import formInstance from "@/services/form.js";

let success = ref(null);

let form = ref({
  title: "",
  url: "",
  salary: "",
  firmName: "",
  city: "",
  // categories: ["Stage","Sur site"],
  logo: "",
});


async function createAnnoncement() {
  console.clear();
  console.log(form.value);
  success.value = null;

  let data = await formInstance.create(
    form.value.title,
    form.value.url,
    form.value.salary,
    form.value.firmName,
    form.value.city,
    // form.value.categories,
    form.value.logo,
  );
  success.value = "Annoncement created";

}

</script>
<template>
  <div class="col-9 position-absolute top-50 start-50 translate-middle">
    <p v-if="success">SUCESS !!!!!! :{{ success }}</p>
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" v-model="form.title">
    </div>

    <div class="mb-3">
      <label class="form-label">Url</label>
      <input type="text" class="form-control" v-model="form.url">
    </div>

    <div class="col mb-3">
      <label class="form-label">Salary</label>
      <input type="text" class="form-control" v-model="form.salary">
    </div>

    <div class="row g-1">
      <div class="col mb-3">
        <label class="form-label">Firm Name</label>
        <input type="text" class="form-control" v-model="form.firmName">
      </div>

      <div class="col mb-3">
        <label class="form-label">City</label>
        <input type="text" class="form-control" v-model="form.city">
      </div>
    </div>

    <!-- <div class="mb-3">
      <label class="form-label">Categories</label>
      <select class="form-select" v-model="form.categories" multiple>
        <option value="Alternance">Alternance</option>
        <option value="Stage">Stage</option>
        <option value="Télétravail">Télétravail</option>
        <option value="Sur site">Sur site</option>
      </select>
    </div> -->

    <div class="mb-3">
      <label for="formFile" class="form-label">Logo</label>
      <input class="form-control" type="file" id="formFile">
    </div>

    <div class="mb-5 d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-outline-success" @click="createAnnoncement">Create</button>
    </div>
  </div>
</template>
