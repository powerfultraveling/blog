// TODO: This is an example for testing
describe('import component', () => {
  test('component is build', async () => {
    const component = await import('../components/Page/ListLink.vue')

    expect(component).toBeDefined()
  })
})
