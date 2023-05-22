<template>
  <header class="row justify-center" v-if="header">
    <div class="border q-mt-xl q-pa-md bg-accent">
      <span class="text-h1 text-dark font">WeMentalize</span>
    </div>
  </header>
  <div class="row justify-center" v-if="mainDiv">
    <span class="border q-mt-xl q-pa-md bg-accent">
      <p class="text-h2 line text-dark font">Hi there, do you mind telling me your name?</p>
      <q-input
        :class="font"
        class="q-mt-xl"
        filled
        v-model="userName"
        color="dark"
        bg-color="primary"
        label="Type here..."
        placeholder="e.g; Taylor"
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
</template>

<script setup>
import { ref } from 'vue'
import { useToDoStore } from './stores/todoStore'
import { RouterView } from 'vue-router'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const todoStore = useToDoStore()
const userName = ref('')
const homePage = ref(false)
const mainDiv = ref(true)
const header = ref(true)

function start() {
  if (userName.value == '') {
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
