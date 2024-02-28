<script setup>
import { ref } from "vue";
import annoncementInstance from "@/services/annoncement.js";

let form = ref({
    title: "email",
    url: "coucou",
    duration: "12/02/2024",
    salary: "1270",
    firmName: "Qwertyty",
    city: "LA",

});

async function createAnnoncement() {
  console.clear();
  console.log(form.value);
//   error.value = null;
//   success.value = null;

  let data = await annoncementInstance.create(
    form.value.title,
    form.value.url,
    form.value.duration,
    form.value.salary,
    form.value.firmName,
    form.value.city,
  );
  success.value = "Annoncement created";

}

</script>
<template>
<div class="col-9">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text" class="form-control" v-model="form.title">
     </div>

     <div class="mb-3">
        <label class="form-label">Url</label>
        <input type="text" class="form-control" v-model="form.url">
     </div>
     <div class="row g-1">
        <div class="col mb-3">
            <label class="form-label">Duration</label>
            <input type="date" class="form-control" v-model="form.duration">
        </div>

        <div class="col mb-3">
            <label class="form-label">Salary</label>
            <input type="currency" class="form-control" v-model="form.salary">
        </div>
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
        <input class="form-check-input" type="checkbox" value="Alternance" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        Alternance
        </label>
    </div>

    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Stage" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
        Stage
        </label>
    </div>
     </div>

    <div class="col">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Télétravail" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        Télétravail
        </label>
    </div>

    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Sur site" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
        Sur site
        </label>
    </div>
    </div>
    </div>
    <div class="mb-5 d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-success " @click="createAnnoncement">Create</button>
      </div>
    </div>
</template>