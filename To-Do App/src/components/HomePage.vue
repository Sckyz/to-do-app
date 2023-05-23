<template>
  <q-img class="background-image" src="../../public/bg.jpg" height="100%" no-transition no-spinner>
    <div class="row q-ma-xl bg-transparent">
      <div class="column div1">
        <div class="q-pa-xl q-ml-xl q-mt-lg bg-secondary round div2">
          <span class="text-h3 line text-dark font">Hello there {{ userName }}</span>
          <q-img src="user.jpeg" class="float-right round img1" />
          <br />
          <br />
          <span class="text-h4 text-dark font">How are you today?</span>
        </div>
        <div>
          <div class="q-ma-xl row items-start">
            <q-date class="date" v-model="calendar" today-btn="true" />
            <q-img src="mush2.jpeg" class="float-right q-ml-xl round img2" />
          </div>
        </div>
      </div>
      <div class="q-pa-xl q-ma-lg bg-secondary round div3">
        <span class="text-h3 text-dark font">What do you wanna check today?</span>
        <br />
        <div class="q-ma-xl bg-warning round div4">
          <router-link to="/today" custom v-slot="{ navigate }">
            <span
              @click="navigate"
              class="text-h3 q-px-xl q-pt-lg row flex-center text-positive font"
              role="link"
            >
              TODAY TASKS
            </span>
          </router-link>
          <br />
        </div>
      </div>
    </div>
  </q-img>
</template>

<script setup>
import { date } from 'quasar'
import { RouterLink } from 'vue-router'
import { useToDoStore } from '../stores/todoStore'

const store = useToDoStore()
const userName = store.name
const timeStamp = Date.now()
const calendar = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
</script>

<style scoped>
.line {
  border-bottom: #2e6830 solid 2px;
  border-radius: 10px;
}
.font {
  font-family: Georgia;
}
.round {
  border-radius: 20px;
}
.div1 {
  width: 50%;
}
.div2 {
  height: 300px;
  width: 76%;
}
.img1 {
  max-width: 200px;
  max-height: 200px;
}
.date {
  width: 40%;
}
.img2 {
  max-width: 300px;
  max-height: 375px;
}
.div3 {
  height: 730px;
  width: 40%;
}
.div4 {
  height: 100px;
}
</style>
