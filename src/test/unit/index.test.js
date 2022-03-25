index = require('../../index')

/**
 * unit test for dummy function pay()
 */
describe('pay function test', () => {
  it('is a dummy function that returns a + 2', () => {
    var result = index.pay(2);
    expect(result).toBe(4);
  });
});

/**
 * After all tests done kill the server
 */
 afterAll(() => {
  index.server.close()
})