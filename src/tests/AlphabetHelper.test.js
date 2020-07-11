const {assert} =require('chai')
const AlphabetHelper=require('../lexer/AlphabetHelper')

describe('AlohabetHelper',()=>{
    it('charCheck',()=>{
        assert.equal(true,AlphabetHelper.isLetter('B'))
        assert.equal(true,AlphabetHelper.isLetter('b'))
        assert.equal(true,AlphabetHelper.isOperator('+'))
        assert.equal(true,AlphabetHelper.isOperator('-'))
        assert.equal(true,AlphabetHelper.isOperator('*'))
        assert.equal(true,AlphabetHelper.isOperator('/'))
        assert.equal(true,AlphabetHelper.isNumber('8'))
        assert.equal(true,AlphabetHelper.isNumber('9'))
        assert.equal(true,AlphabetHelper.isLiteral('_'))
        assert.equal(true,AlphabetHelper.isLiteral('M'))
    })
})