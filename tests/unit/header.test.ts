import { mountSuspended } from '@nuxt/test-utils/runtime'
import component from '~/components/Layout/DefaultHeader.vue'

const MENU_LABELS = ['關於我', '文章列表', '前端挑戰']

describe('header', () => {
  test('header is exist', () => {
    expect(component).toBeDefined()
  })
  test('check header menu label', async () => {
    const wrapper = await mountSuspended(component)

    for (let i = 0; i < MENU_LABELS.length; i++) {
      const text = wrapper.findAll('div[data-test="menu-label"]"').at(i).text()

      expect(text).toBe(MENU_LABELS[i])
    }
  })
})
