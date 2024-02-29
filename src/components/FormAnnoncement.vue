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
  alternance: false,
  stage: false,
  teletravail: false,
  surSite: false,
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
    form.value.categories,
    form.value.logo,
  );

  success.value = "Annoncement created";

}

</script>
<template>
  <p v-if="success">SUCESS !!!!!! :{{ success }}</p>
  <div class="col-9 position-absolute top-50 start-50 translate-middle">
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

    <div class="row">
      <div class="col">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Alternance" id="categories" v-model="form.alternance">
          <label class="form-check-label" for="flexCheckAlternance">Alternance</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Stage" id="categories" v-model="form.stage">
          <label class="form-check-label" for="flexCheckStage">Stage</label>
        </div>
      </div>

      <div class="col">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Télétravail" id="categories" v-model="form.teletravail">
          <label class="form-check-label" for="flexCheckTeletravail">Télétravail</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Sur site" id="categories" v-model="form.surSite">
          <label class="form-check-label" for="flexCheckSurSite">Sur site</label>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label for="formFile" class="form-label">Logo</label>
      <input class="form-control" type="file" id="formFile" >
    </div>

    <div class="mb-5 d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-outline-success" @click="createAnnoncement">Create</button>
    </div>
  </div>
</template>
