const Chai = require('chai');
const sinon = require('sinon');
const userDomain = require('../../server/domain').userDomain;
const userRepository = require('../../server/infrastructure/persistence/repositories/userRepository');

describe('userDomain', () => {
    const expect = Chai.expect;
    let userRepositoryStub = sinon.stub(userRepository);

    describe('getUsers', () => {
        it('should call getUsers method of userRepository', function () {
            // When
            userDomain.getUsers(userRepositoryStub);

            // Then
            expect(userRepositoryStub.getUsers.calledOnce).to.be.true;
        });
    });

    describe('getUsers', () => {
        it('should call getUsers method of userRepository', function () {
            // Given
            let id = '1';

            // When
            userDomain.getUser(userRepositoryStub, id);

            // Then
            expect(userRepositoryStub.getUser.calledOnce).to.be.true;
            expect(userRepositoryStub.getUser.calledWithExactly(id)).to.be.true;
        });
    });
});
