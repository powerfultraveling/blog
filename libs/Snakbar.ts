// show, hid, opened

type MessageType = 'success' | 'danger' | 'warn'

interface Message {
  content: string
  type: MessageType
}

class Snackbar {
  constructor() {
    this.opened = []
  }

  show() {}

  danger() {}

  success() {}

  hide() {}
}

export default Snackbar
