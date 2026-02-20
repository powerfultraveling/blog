import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// 引入程式碼高亮 (Prism)
import * as Prism from 'prismjs'

export default defineNuxtPlugin((nuxtApp) => {
  VMdEditor.use(githubTheme, {
    Prism
  })

  nuxtApp.vueApp.use(VMdEditor as any)
})
