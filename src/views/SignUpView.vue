<script setup>
import { ref } from "vue";
import userInstance from "@/services/user.js";
import { cryptPassword } from "@/services/utils.js";

let form = ref({
  email: "name@example.com",
  password: "ceciestunexemple",
  name: "Name",
});

let error = ref(null);
let success = ref(null);

function redirectToAnotherPage() {
  window.location.href = '/dashboard';
}

async function createAccount() {
  console.clear();
  console.log(form.value);
  error.value = null;
  success.value = null;

  let user = await userInstance.exists(form.value.email);
  if (user.list.length > 0) {
    error.value = "User exists";
    return false;
  }

  let data = await userInstance.create(
    form.value.email,
    cryptPassword(form.value.password),
    form.value.name
  );
  success.value = "User created";

  redirectToAnotherPage(); // Redirect only after the user clicks the "Create" button
}

</script>

<template>
    <div class="col-7 text-center position-absolute top-50 start-50 translate-middle">
      <p class="h3 text-success">JobHunter</p>
      <h1>Create an Account</h1>

      <p v-if="error">ERREUR !!!!!! :{{ error }}</p>

      <div class="row mt-5 mb-3 justify-content-center">
        <div class="col-auto">
          <label class="col-form-label">Name :</label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control"  v-model="form.name">
        </div>
      </div>

      <div class="row mb-3 justify-content-center">
        <div class="col-auto">
          <label class="col-form-label">Email :</label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control"  v-model="form.email">
        </div>
      </div>

      <div class="row mb-3 justify-content-center">
        <div class="col-auto">
          <label class="col-form-label">Password :</label>
        </div>
        <div class="col-auto">
          <input type="password"  class="form-control"  v-model="form.password">
        </div>
      </div>

      <div class="mb-5 d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-success " @click="createAccount">Create</button>
      </div>
      <p>Already have you an account? <a href="/login" class="link-success">Login</a></p>
    </div>
    
</template>
