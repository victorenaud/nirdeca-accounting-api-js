const index = require('../../index.js');
const Chai = require('chai');
const expect = Chai.expect;

describe('usersRoute', () => {
    let server;

    beforeEach(() => {
        server = index.createServer();
    });

    describe('GET /users', () => {
        const request = {
            method: 'GET',
            url: '/users'
        };
        it('should give all users when called', () => {
            // Given
            const expectedResult = [ { id: 1,
                name: 'John_1',
                last_name: 'Doe_1',
                email: 'john_1@doe.com',
                created_at: null,
                updated_at: null },
                { id: 2,
                    name: 'John_2',
                    last_name: 'Doe_2',
                    email: 'john_2@doe.com',
                    created_at: null,
                    updated_at: null },
                { id: 3,
                    name: 'John_3',
                    last_name: 'Doe_3',
                    email: 'john_3@doe.com',
                    created_at: null,
                    updated_at: null } ];


            // When
            return server.inject(request)
            // Then
                .then(response => {
                    expect(response.statusCode).to.equal(200);
                    expect(response.result).to.deep.equal(expectedResult);
                });
        });
    });

    describe('GET /users/:id', () => {
        const request = {
            method: 'GET',
            url: '/users/2'
        };

        it('should give the details of user asked when called with id', () => {
            // Given
            const expectedResult = [{ id: 2,
                name: 'John_2',
                last_name: 'Doe_2',
                email: 'john_2@doe.com',
                created_at: null,
                updated_at: null }];


            // When
            return server.inject(request)
            // Then
                .then(response => {
                    expect(response.statusCode).to.equal(200);
                    expect(response.result).to.deep.equal(expectedResult);
                });
        });
    });
});
