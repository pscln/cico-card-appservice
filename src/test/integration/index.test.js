const request = require('supertest')
const { server } = require('../../index')

const index = require('../../index')

/**
 * Test the status endpoint with method GET
 */
describe('Status endpoint', () => {
    it('Display the current status of the app', () => {
        return request(index.app).get('/status')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({status: 'running'})
    })
})

/**
 * Test the pay endpoint with method GET
 */
describe('Pay endpoint', () => {
    it('Calculates the sum of a given parameter and 2', () => {
        var param = 2;
        const result = param + 2;

        return request(index.app).get('/pay')
        .query({amount: 2})
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({success: true, result: result})
    })

    it('Should fail when the given parameter is not positive', () => {
        var result = request(index.app).get('/pay')
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