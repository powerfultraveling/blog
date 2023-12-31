import { createVNode, render } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import SSnackbar from '~/components/Share/SSnackbar.vue'
import { MessageType } from '~/libs/support/types'

interface Message {
  content: string
  type: MessageType
}

class Snackbar {
  private opened: ComponentInternalInstance[] = []

  constructor() {
    this.opened = []
  }

  show(message: Message = { content: '', type: MessageType.success }) {
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

    const vm = vnode.component!

    vm?.exposed?.show()

    this.opened = [...this.opened, vm]

    return vm
  }

  danger(content: string) {
    this.show({ content, type: MessageType.danger })
  }

  success(content: string) {
    this.show({ content, type: MessageType.success })
  }

  hide() {
    this.opened.forEach((element) => element.exposed?.hide())
  }
}

export default Snackbar
