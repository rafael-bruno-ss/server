"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("../../test-utils");
describe('users', () => {
    it('should return true (a === a)', () => {
        test_utils_1.chai.assert.equal('abc', 'abc');
    });
    it('should return true (a !== b)', () => {
        test_utils_1.chai.assert.notEqual('a', 'b');
    });
});
