<template>
  <header class="row justify-center">
    <div class="border q-mt-xl q-pa-md">
      <span class="text-h1">WeMentalize</span>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <br />
        <RouterLink to="/today">Today</RouterLink>
      </nav> -->
    </div>
  </header>
  <div class="row justify-center">
    <span class="login q-mt-xl q-pa-md">
      <p class="text-h3">Hi there, do you mind telling me your name?</p>
      <q-input color="lime-11" bg-color="green-7" filled v-model="text" label="Type here..." placeholder="e.g; Taylor"></q-input>
    </span>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.border {
  border: #09431e solid 10px;
}
.login {
  border: #193d22 solid 6px;
}
</style>
