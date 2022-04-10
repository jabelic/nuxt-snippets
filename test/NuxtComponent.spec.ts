import { mount } from '@vue/test-utils'
import Inputs from '@/components/Inputs.vue'
import VTree from '@/components/VTree.vue'
import CounterForPI from '@/components/CounterForPI.vue'
/** required '.vue' */

// describe('component', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Inputs)
//     expect(wrapper.vm).toBeTruthy()
//   })
//   test('is a Vue instance', () => {
//     const wrapper = mount(VTree)
//     expect(wrapper.vm).toBeTruthy()
//   })
//   test('is a Vue instance', () => {
//     const wrapper = mount(CounterForPI)
//     expect(wrapper.vm).toBeTruthy()
//   })
// })
// describe('component', () => {
//   it('is a Vue instance', () => {
//     const wrapper = mount(Inputs)
//     expect(wrapper.vm).toBeTruthy()
//   })
//   it('is a Vue instance', () => {
//     const wrapper = mount(VTree)
//     expect(wrapper.vm).toBeTruthy()
//   })
//   it('is a Vue instance', () => {
//     const wrapper = mount(CounterForPI)
//     expect(wrapper.vm).toBeTruthy()
//   })
// })
test.each([Inputs, VTree, CounterForPI])('Component test', (component) => {
  const wrapper = mount(component)
  expect(wrapper.vm).toBeTruthy()
})
