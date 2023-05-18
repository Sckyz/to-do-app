<template>
  <div class="column float-left">
    <router-link to="/" custom v-slot="{ navigate }">
      <q-btn round color="info" @click="navigate" icon="home" class="text-h3 q-ma-md q-pa-md" role="link" />
    </router-link>
    <br/>
    <router-link to="/weekly" custom v-slot="{ navigate }">
      <q-btn round color="info" @click="navigate" icon="calendar_month" class="text-h3 q-ma-md q-pa-md" role="link" />
    </router-link>
    <br/>
    <router-link to="/reminders" custom v-slot="{ navigate }">
      <q-btn round color="info" @click="navigate" icon="event" class="text-h3 q-ma-md q-pa-md" role="link" />
    </router-link>
  </div>
  <div class="row flex-center q-mt-xl">
    <div class="q-pa-xl q-ma-lg bg-primary round" style="height: 730px; width: 80%">
      <span class="text-h1 text-dark line">To Do</span>
      <q-img
        src="mush.jpeg"
        style="max-width: 200px; max-height: 150px"
        class="float-right round"
      />
      <q-btn round color="negative" icon="send" class="float-right q-ma-lg" @click="addTask" />
      <q-input
        rounded
        class="float-right q-mt-lg size"
        v-model="task"
        label="What Do I Need To Do Today?"
        placeholder="e.g; Go to the gym"
        style="width: 55%"
        standout="bg-info"
      />
      <q-scroll-area style="height: 30rem; width: 80rem">
        <div class="bg-secondary q-ma-lg size" v-for="task in store.tasks" :key="task">
          <span>{{ task }}</span>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useArrayStore } from '../stores/arrayStore'

const task = ref('')
const store = useArrayStore()

function addTask() {
  if (task.value === '') {
    alert('no nothing in there')
    return
  }
  store.tasks.push(task.value)
  cleanField()
}

function cleanField() {
    task.value = ""
}
</script>

<style scoped>
.line {
  border-bottom: #52682e double 10px;
}
.round {
  border-radius: 20px;
}
.size {
  font-size: 20pt;
}
</style>
