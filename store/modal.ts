import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal-store', () => {
  const openedList = ref<string[]>([])

  return { openedList }
})
