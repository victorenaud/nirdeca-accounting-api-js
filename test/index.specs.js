const supertest = require('supertest')
const {createServer} = require('../')

describe('GET /', () => {
    let server
    beforeEach(() => {
        server = createServer()
        return server.start()
    })
    afterEach(() => {
        return server.stop()
    })



    it('replies hello Nirdeca', () => {
        return supertest(server.listener)
            .get('/')
            .expect(200)
            .expect('Hello Nirdeca!')
    })
})