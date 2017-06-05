const Chai = require('chai');
const sinon = require('sinon');
const userDomain = require('../../server/domain').userDomain;
const userRepository = require('../../server/infrastructure/persistence/repositories/userRepository');

describe('userDomain', () => {
    const expect = Chai.expect;
    let userRepositoryStub = sinon.stub(userRepository);

    describe('getUsers', () => {
        it('should call getUsers method of userRepository', () => {
            // When
            userDomain.getUsers(userRepositoryStub);

            // Then
            expect(userRepositoryStub.getUsers.calledOnce).to.be.true;
        });
    });

    describe('getUser', () => {
        it('should call getUser method of userRepository with given id', () => {
            // Given
            let id = '1';

            // When
            userDomain.getUser(userRepositoryStub, id);

            // Then
            expect(userRepositoryStub.getUser.calledOnce).to.be.true;
            expect(userRepositoryStub.getUser.calledWithExactly(id)).to.be.true;
        });
    });

    describe('addUser', () => {
        it('should call addUser method of userRepository with given details', () => {
            // Given
            let user = {
                name: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.org'
            };

            // When
            userDomain.addUser(userRepositoryStub, user);

            // Then
            expect(userRepositoryStub.addUser.calledOnce).to.be.true;
            expect(userRepositoryStub.addUser.calledWithExactly(user)).to.be.true;
        });
    });
});
