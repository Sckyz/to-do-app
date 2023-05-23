<template>
  <q-img class="background-image row flex-center" src="../public/bg.jpg" no-transition no-spinner>
    <header class="row justify-center" v-if="header">
      <div class="border q-mt-xl q-pa-md bg-accent">
        <span class="text-h1 text-dark font">WeMentalize</span>
      </div>
    </header>
    <div class="bg-transparent row fixed-center" v-if="mainDiv">
      <span class="border q-mt-xl q-pa-md bg-accent">
        <p class="text-h2 line text-dark font">Hi there, do you mind telling me your name?</p>
        <q-input
          class="q-mt-xl text-capitalize font"
          filled
          v-model="userName"
          color="dark"
          bg-color="primary"
          label="Type here..."
          placeholder="e.g; Taylor"
          @keyup.enter="start"
        />
        <q-btn
          class="q-mt-xl font"
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
  </q-img>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { RouterView } from 'vue-router'
import { useToDoStore } from './stores/todoStore'

const $q = useQuasar()
const todoStore = useToDoStore()

const userName = ref('')
const header = ref(true)
const mainDiv = ref(true)
const homePage = ref(false)

function start() {
  if (userName.value === '') {
    $q.notify({
      message: 'There nothing in there :(',
      color: 'top',
      position: 'center'
    })
    return
  }
  todoStore.name = userName.value
  homePage.value = true
  mainDiv.value = false
  header.value = false
}
</script>

<style scoped>
.border {
  border: #3b6c3f solid 10px;
  border-radius: 20px;
}
.line {
  border-bottom: #2e6830 solid 1px;
  border-radius: 10px;
}
.font {
  font-family: Georgia;
}
</style>
