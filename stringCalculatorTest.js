const stringCalculator = require('./stringCalculator')
const {assert} = require('chai');

describe('String Calculator Must', () => {
    it('Take an empty String and return 0', () => {
        const result = stringCalculator('');

        assert.strictEqual(result, 0)
    })

    it('Parse a single number and return it', () => {
        const result = stringCalculator('4');

        assert.strictEqual(result, 4);
    })

    it('Take two comma-separated numbers and return the sum', () => {
        const result = stringCalculator('1,2');

        assert.strictEqual(result, 3);
    })

    it('Sum comma-separated number lists of any size', () => {
        const result = stringCalculator('1,2,3,4,5,6,7,8,9');

        assert.strictEqual(result, 45);
    })

    it('Allow newline characters or commas as separators', () => {
        const result = stringCalculator('1\n2,3');

        assert.strictEqual(result, 6);
    })

    it('Allows custom separators', () => {
        const result = stringCalculator('//;\n1;2');

        assert.strictEqual(result, 3);
    })

    it('Allows arbitrtary custom separators', () => {
        const result = stringCalculator('//*\n1*2');

        assert.strictEqual(result, 3);
    })

    it('does not allow negative numbers', () => {
        const result = stringCalculator('1,-2,-3');

        assert.strictEqual(result, 'negatives not allowed: -2 -3'); 
    })
})
