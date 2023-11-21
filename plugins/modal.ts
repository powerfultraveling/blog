import type { Pinia } from 'pinia'
import Modal from '~/libs/Modal'

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const pinia: Pinia = useNuxtApp().$pinia

  const modal = new Modal(router, pinia)

  return {
    provide: { modal }
  }
})
