import { defineStore } from 'pinia'

export const useArrayStore = defineStore('arrayStore', {
    state: () => {
        return {
          name: [],
        }
      },
})