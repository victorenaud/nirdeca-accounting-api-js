const supertest = require('supertest')
const {
    createServer
} = require('../')

describe('index.js', () => {
    let server

    beforeEach(() => {
        server = createServer()
        return server.start()
    })

    afterEach(() => {
        return server.stop()
    })

    describe('GET /', () => {
        const pjson = require('../package.json')

        it('should replies hello Nirdeca when called', () => {
            return supertest(server.listener)
                .get('/')
                .expect(200)
                .expect({
                    description: pjson.description,
                    version: pjson.version
                })
        })
    })

    describe('GET /users', () => {
        const users = require('../data/users.json')

        it('should give all users', () => {
            return supertest(server.listener)
                .get('/users')
                .expect(200)
                .expect(users)
        })
    })
})
