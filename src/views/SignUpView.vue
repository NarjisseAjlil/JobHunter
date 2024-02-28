<script setup>
import { ref } from "vue";
import userInstance from "@/services/user.js";
import { cryptPassword } from "@/services/utils.js";

let form = ref({
  name: "Qwerty",
  email: "qwerty@gmail.com",
  password: "coucou",
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
    <div class="card text-center align-items-center">
      <h1 class="text-center">Create an account</h1>

      <p v-if="error">ERREUR !!!!!! :{{ error }}</p>

      <div class="row g-3 align-items-center mb-2">
        <div class="col-auto">
          <label class="col-form-label">Name</label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control" v-model="form.name">
        </div>
      </div>

      <div class="row g-3 align-items-center mb-2">
        <div class="col-auto">
          <label class="col-form-label">Email</label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control" v-model="form.email">
        </div>
      </div>

      <div class="row g-3 align-items-center mb-2">
        <div class="col-auto">
          <label class="col-form-label">Password</label>
        </div>
        <div class="col-auto">
          <input type="password"  class="form-control" v-model="form.password">
        </div>
      </div>

      <p>
        <button class="btn btn-outline-success" @click="createAccount">Create</button>
      </p>
      <p class="text-center">Already have you an account? <a href="/login">Login</a></p>
    </div>
    
</template>
