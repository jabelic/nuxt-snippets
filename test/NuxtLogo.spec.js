import { mount } from '@vue/test-utils'
import Inputs from '@/components/Inputs.vue'

describe('Inputs', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Inputs)
    expect(wrapper.vm).toBeTruthy()
  })
})
