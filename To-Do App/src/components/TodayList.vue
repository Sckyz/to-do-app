<template>
  <div class="row flex-center q-mt-xl">
    <div class="q-pa-xl q-ma-lg bg-primary round" style="height: 730px; width: 80%">
      <div class="column float-right">
        <router-link to="/" custom v-slot="{ navigate }">
          <q-btn round color="info" @click="navigate" icon="home" class="text-h4" role="link" />
        </router-link>
      </div>
      <span class="text-h1 text-dark line font">To Do</span>
      <q-img
        src="mush.jpeg"
        style="max-width: 200px; max-height: 150px"
        class="float-right round"
      />
      <q-btn round color="negative" icon="add" class="float-right q-ma-lg" @click="addTask" />
      <q-input
        rounded
        class="float-right q-mt-lg size font"
        v-model="task"
        label="What Do I Need To Do Today?"
        placeholder="e.g; Go to the gym"
        style="width: 50%"
        standout="bg-info"
        @keyup.enter="addTask"
      />
      <q-scroll-area style="height: 30rem; width: 80rem">
        <div class="bg-secondary q-ma-lg size round" v-for="task in store.todoList" :key="task.id">
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
              @click="openModal(task.id)"
            >
              <q-dialog v-model="modalIsOpen" persistent>
                <q-card style="min-width: 350px" class="bg-info text-dark">
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
                      @keyup.enter="upTask(inputUpdate, modalId)"
                      v-close-popup
                    />
                  </q-card-section>
                  <q-card-actions align="center" class="text-dark font">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn
                      flat
                      label="Update Task"
                      @click="upTask(inputUpdate, modalId)"
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
const { toggleCompleted, deleteTodo, upTask } = store

const task = ref('')
const modalId = ref(null)
const modalIsOpen = ref(false)

function addTask() {
  if (task.value == '') {
    $q.notify({
      message: "There's nothing in there :(",
      color: 'info',
      position: 'top'
    })
    return
  }
  store.addTodo(task.value)
  cleanField()
  return { todoList, toggleCompleted, deleteTodo, upTask }
}

function openModal(id) {
  modalIsOpen.value = !modalIsOpen.value
  modalId.value = id
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
</style>
