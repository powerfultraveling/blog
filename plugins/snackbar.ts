import Snackbar from '~/libs/Snakbar'

export default defineNuxtPlugin(() => {
  const snackbar = new Snackbar()

  return {
    provide: {
      snackbar
    }
  }
})
