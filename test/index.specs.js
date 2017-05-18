const index = require('../server/infrastructure/server.js');
const Chai = require('chai');
const expect = Chai.expect;

describe('index', () => {
    let server;

    beforeEach(() => {
        server = index.createServer();
    });

    describe('GET /', () => {
        const pjson = require('../package.json');
        const requestDefaults = {
            method: 'GET',
            url: '/',
        };

        it('should reply with API informations a when called', () => {
            // Given
            const request = Object.assign({}, requestDefaults);

            // When
            return server.inject(request)
            // Then
                .then(response => {
                    expect(response.statusCode).to.equal(200);
                    expect(response.result.description).to.equal(pjson.description);
                    expect(response.result.version).to.equal(pjson.version);
                });
        })
    });
});
