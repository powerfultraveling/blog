type Methods = 'add' | 'remove'

function operateHTMLClass(method: Methods) {
  if (process.server) {
    return
  }

  document.querySelector('html')?.classList[method]('overflow-hidden')
}

function lock() {
  operateHTMLClass('add')
}

function unlock() {
  operateHTMLClass('remove')
}

export default defineNuxtPlugin(() => {
  const scroll = { lock, unlock }

  return {
    provide: { scroll }
  }
})
