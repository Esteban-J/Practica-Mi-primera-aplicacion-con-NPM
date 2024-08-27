//import sumar from '../index.js';
//import assert from 'assert';

const sumar = require('../index.js');
const assert = require('assert');

describe("Probar la suma de dos ñumeros", () => {
    // Afirmar que cinco más cinco son 10.
    it("Cinco más cino es 10.", () => {
        assert.equal(10, sumar(5,5));
;    });
    // Afirmar que cinco más cinco no son 55.
    it("Cinco más cinco no son 55.", () => {
        assert.notEqual(55, sumar(5,5));
    })

});