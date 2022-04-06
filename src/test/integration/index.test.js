const request = require('supertest')
const { server } = require('../../index')

const index = require('../../index')

/**
 * Test the add endpoint with method GET
 */
describe('add endpoint', () => {
    it('Calculates the sum of a given parameter and 2', () => {
        var param = 2;
        const result = param + 2;

        return request(index.app).get('/add')
        .query({amount: 2})
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({success: true, result: result})
    })

    it('Should fail when the given parameter is not positive', () => {
        var result = request(index.app).get('/add')
        .query({amount: 0})

        return result.expect(400)
            .expect('Content-Type', /json/)
            .expect({success: false, error: 'Illegal amount type! Please provide a positive number!'});
    })
});

/**
 * After all tests done kill the server
 */
afterAll(() => {
    index.server.close()
})