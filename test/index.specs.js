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
            // When
            return supertest(server.listener)
                .get('/')

                // Then
                .expect(200)
                .expect({
                    description: pjson.description,
                    version: pjson.version
                })
        })
    })

    describe('GET /users', () => {
        const users = require('../data/users.json')

        it('should give all users when called', () => {
            // When
            return supertest(server.listener)
                .get('/users')

                // Then
                .expect(200)
                .expect(users)
        })

        it('should give the details of user asked when called with id', () => {

            // Given
            return supertest(server.listener)
                .get('/users/1')

                // Then
                .expect(200)
                .expect(users.users[0])
        })
    })
})
