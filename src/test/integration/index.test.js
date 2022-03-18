const request = require('supertest')
const { server } = require('../../index')

const index = require('../../index')

// Test the index-page on route GET /
describe('Home page', () => {
    it('should render the index page', () => {
        return request(index.app).get('/').expect(200)
    })
})

// After all tests done kill the server
afterAll(() => {
    index.server.close()
})