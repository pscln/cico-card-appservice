const request = require('supertest')
const { server } = require('../../index')

const index = require('../../index')

// Test the index-page on route GET /
describe('Home page', () => {
    it('should render the index page', () => {
        return request(index.app).get('/').expect(200)
    })
})

describe('Status endpoint', () => {
    it('Display the current status of the app', () => {
        return request(index.app).get('/status')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({status: 'running'})
    })
})

// After all tests done kill the server
afterAll(() => {
    index.server.close()
})