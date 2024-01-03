import { mount } from '@vue/test-utils'
import component from '~/components/Layout/DefaultHeader.vue'

describe('header', () => {
  test('header', () => {
    const wrapper = mount(component)

    expect(wrapper).toBeDefined()
  })
})
