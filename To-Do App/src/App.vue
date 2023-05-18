<template>
  <header class="row justify-center" v-if="header">
    <div class="border q-mt-xl q-pa-md bg-accent">
      <span class="text-h1 text-dark">WeMentalize</span>
    </div>
  </header>
  <div class="row justify-center" v-if="mainDiv">
    <span class="login q-mt-xl q-pa-md bg-accent">
      <p class="text-h2 line text-dark">Hi there, do you mind telling me your name?</p>
      <q-input
        class="q-mt-xl"
        filled
        v-model="userName"
        color="dark"
        bg-color="primary"
        label="Type here..."
        placeholder="e.g; Taylor"
      ></q-input>
      <q-btn
        class="q-mt-xl"
        glossy
        push
        color="info"
        text-color="dark"
        @click="start"
        label="Start Mentalizing"
      />
    </span>
  </div>
  <RouterView v-if="homePage" />
</template>

<script setup>
import { ref } from 'vue'
import { useArrayStore } from './stores/arrayStore'
import { RouterView } from 'vue-router'

const arraystore = useArrayStore()
const userName = ref('')
const homePage = ref(false)
const mainDiv = ref(true)
const header = ref(true)

function start() {
  if (userName.value == '') {
    alert('hey')
    return
  }
  arraystore.name = userName.value
  homePage.value = true
  mainDiv.value = false
  header.value = false
}
</script>

<style scoped>
.border {
  border: #3b6c3f solid 10px;
}
.login {
  border: #28452a solid 6px;
}
.line {
  border-bottom: #2e6830 solid 2px;
}
</style>
