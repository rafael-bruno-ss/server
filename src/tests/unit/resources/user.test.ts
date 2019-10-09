import { app, db, chai, handleError, expect } from '../../test-utils';

describe('users', () => {
  it('should return true (a === a)', () => {
    chai.assert.equal('abc', 'abc');
  });

  it('should return true (a !== b)', () => {
    chai.assert.notEqual('a', 'b');
  });
});
