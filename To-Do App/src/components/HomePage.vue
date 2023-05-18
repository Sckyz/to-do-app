<template>
  <div class="row q-ma-xl">
    <div class="column" style="width: 50%">
      <div class="q-pa-xl q-ml-xl q-mt-lg bg-secondary round" style="height: 300px; width: 76%">
        <span class="text-h3 line text-dark">Hello there {{ userName }}</span>
        <q-img src="user.jpeg" style="max-width: 200px; max-height: 200px" class="float-right" />
        <br />
        <br />
        <span class="text-h4 text-dark">How are you today?</span>
      </div>
      <div>
        <div class="q-ma-xl row items-start">
          <q-date style="width: 40%" v-model="date" />
          <q-img
            src="mush2.jpeg"
            style="max-width: 300px; max-height: 375px"
            class="float-right q-ml-xl"
          />
        </div>
      </div>
    </div>
    <div class="q-pa-xl q-ma-lg bg-secondary round" style="height: 730px; width: 40%">
      <span class="text-h3 text-dark">What do you wanna check today?</span>
      <br />
      <div class="q-ma-xl bg-warning round" style="height: 100px">
        <router-link to="/today" custom v-slot="{ navigate }">
          <span
            @click="navigate"
            class="text-h3 q-px-xl q-pt-lg row flex-center text-positive"
            role="link"
            >TODAY TASKS</span
          >
        </router-link>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useArrayStore } from '../stores/arrayStore'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const date = ref('2023/05/17')
const store = useArrayStore()
const userName = store.name
</script>

<style scoped>
.line {
  border-bottom: #52682e solid 2px;
}
.round {
  border-radius: 20px;
}
</style>
