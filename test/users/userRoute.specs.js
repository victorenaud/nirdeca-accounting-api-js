const index = require('../../server/infrastructure/server.js');
const userController = require('../../server/users/userController.js');
const Chai = require('chai');
const sinon = require('sinon');

describe('usersRoute', () => {
    const expect = Chai.expect;
    const stub = sinon.stub;
    let getUsers
    let server;

    beforeEach(() => {
        getUsers = stub(userController, 'getUsers').callsFake(function(){return "toto"});
        server = index.createServer();
    });

    describe('GET /users', () => {
        const request = {
            method: 'GET',
            url: '/users'
        };

        it('should call getUsers in UsersController', function () {
            // Given

            // When
            server.inject(request, function(results) {
                console.log(results)
                console.log('totototo')
                // expect(getUsers.calledOnce).to.be.true;


            })

            // Then
            expect(getUsers.calledOnce).to.be.true;
        });
    });

    describe.skip('GET /users/:id', () => {
        const request = {
            method: 'GET',
            url: '/users/2'
        };

        it('should call getUsers in UsersController', function () {
            // Given
            const getUser = stub(userController, 'getUser');

            // When
            return server.inject(request);

            // Then
            expect(getUser.calledOnce(2)).to.be.true;
        });
    });
});
