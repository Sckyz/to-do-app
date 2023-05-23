<template>
  <q-img class="background-image" src="../../public/bg.jpg" height="100%" no-transition no-spinner>
    <div class="q-mt-xl bg-transparent row flex-center">
      <div class="q-pa-xl q-ma-lg bg-primary round div1">
        <div class="column float-right">
          <router-link to="/" custom v-slot="{ navigate }">
            <q-btn round color="info" @click="navigate" icon="home" class="text-h4" role="link" />
          </router-link>
        </div>
        <div class="row flex-center">
          <span class="text-h1 text-dark line font">To Do</span>
          <q-input
            rounded
            class="float-right q-ma-lg size font inp"
            v-model="task"
            label="What Do I Need To Do Today?"
            placeholder="e.g; Go to the gym"
            standout="bg-info"
            @keyup.enter="addTask"
          />
          <q-btn round color="negative" icon="add" class="float-right q-ma-lg" @click="addTask" />
          <q-img src="mush.jpeg" class="float-right round img" />
          <q-scroll-area class="scroll">
            <div
              class="bg-secondary q-ma-lg size round"
              v-for="task in store.todoList"
              :key="task.id"
            >
              <span :class="{ completed: task.completed }">
                <q-btn
                  round
                  color="negative"
                  icon="check"
                  class="q-mr-xs font"
                  @click="toggleCompleted(task.id)"
                />
                {{ task.item }}
                <q-btn
                  round
                  color="negative"
                  icon="delete"
                  class="float-right q-mr-xs"
                  @click="deleteTodo(task.id)"
                />
                <q-btn
                  round
                  color="negative"
                  icon="edit"
                  class="float-right q-mr-xs font"
                  @click="toggleModal(task.id)"
                >
                  <q-dialog v-model="isModalOpen" persistent>
                    <q-card class="bg-info text-dark card">
                      <q-card-section class="row justify-center">
                        <div class="text-h5 font text-dark">Change Task</div>
                      </q-card-section>
                      <q-card-section class="q-pt-xs">
                        <q-input
                          class="text-h5 font"
                          item-aligned
                          dense
                          v-model="inputUpdate"
                          autofocus
                          @keyup.enter="updateTask(inputUpdate, modalId)"
                          v-close-popup
                        />
                      </q-card-section>
                      <q-card-actions align="center" class="text-dark font">
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn
                          flat
                          label="Update Task"
                          @click="updateTask(inputUpdate, modalId)"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </q-btn>
              </span>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </q-img>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useToDoStore } from '../stores/todoStore'

const $q = useQuasar()
const store = useToDoStore()

const { todoList } = storeToRefs(store)
const { toggleCompleted, deleteTodo, updateTask } = store

const task = ref('')
const modalId = ref(null)
const isModalOpen = ref(false)

function addTask() {
  if (task.value === '') {
    $q.notify({
      message: "There's nothing in there :(",
      color: 'info',
      position: 'top'
    })
    return
  }
  store.addTodo(task.value)
  cleanField()
  return { todoList, toggleCompleted, deleteTodo, updateTask }
}

function toggleModal(id) {
  isModalOpen.value = !isModalOpen.value
  isModalOpen.value = id
}

function cleanField() {
  task.value = ''
}
</script>

<style scoped>
.line {
  border-bottom: #2e6830 solid 2px;
  border-radius: 10px;
}
.round {
  border-radius: 20px;
}
.size {
  font-size: 20pt;
}
.completed {
  text-decoration: line-through;
}
.font {
  font-family: Georgia;
}
.inp {
  width: 50%;
}
.scroll {
  height: 30rem;
  width: 80rem;
}
.div1 {
  height: 730px;
  width: 80%;
}
.img {
  max-width: 200px;
  max-height: 150px;
}
.card {
  min-width: 350px;
}
</style>
