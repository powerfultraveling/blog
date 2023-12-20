import Snackbar from '~/libs/Snackbar'

export default defineNuxtPlugin(() => {
  const snackbar = new Snackbar()

  return {
    provide: {
      snackbar
    }
  }
})
