import '../src/setup';

describe('test setup', () => {
  it('define',() => {
    expect(global.wx).toBeDefined()
  })
})