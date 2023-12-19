// show, hid, opened
import { createVNode, render } from 'vue'
import SSnackbar from '~/components/Share/SSnackbar.vue'
import { MessageType } from '~/libs/support/types'

interface Message {
  content: string
  type: MessageType
}

class Snackbar {
  private opened: unknown[] = []

  constructor() {
    this.opened = []
  }

  show(message: Message = { message: '', type: MessageType.success }) {
    const container = document.createElement('div')

    const vnode = createVNode(SSnackbar, {
      ...message,
      onHide: () => {
        document.querySelector('body')?.removeChild(container)
        this.opened.splice(this.opened.indexOf(vm), 1)
      }
    })

    render(vnode, container)
    document.querySelector('body')?.appendChild(container)

    const vm = vnode.component

    vm.exposed.show()

    this.opened = [...this.opened, vm]

    return vm
  }

  danger() {}

  success() {}

  hide() {
    this.opened.forEach((element) => element.exposed.hide())
  }
}

export default Snackbar
