import { mount } from '@vue/test-utils'
import component from '~/components/Layout/DefaultFooter.vue'

describe('footer', () => {
  test('footer', () => {
    const wrapper = mount(component)
    const textElement = wrapper.find('.text-xs')
    const CORRECT_TEXT = 'Copyright Charles Tsai All Rights Reserved.'

    expect(textElement.text()).toBe(CORRECT_TEXT)
  })
})
