const supertest = require('supertest')
const {
    createServer
} = require('../')

describe('index.js', () => {
    describe('GET /', () => {
        let server
        const pjson = require('../package.json')

        beforeEach(() => {
            server = createServer()
            return server.start()
        })
        afterEach(() => {
            return server.stop()
        })

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
})
