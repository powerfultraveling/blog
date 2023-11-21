import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal-store', () => {
  const openedList = ref<string[]>([])

  function setOpenedList(list: string[]) {
    openedList.value = list
  }

  return { openedList, setOpenedList }
})
