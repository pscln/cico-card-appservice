const index = require('../../index')

/**
 * unit test for dummy function add()
 */
describe('add function test', () => {
  it('is a dummy function that returns a + 2', () => {
    const expectResult = 4;
    var result = index.add(2);

    expect(result).toBe(expectResult);
  });
});

/**
 * After all tests done kill the server
 */
 afterAll(() => {
  index.server.close()
})