const assert = require('assert').strict

const numParse = require('./../index')

describe('Tests', function() {
  it('parse from string', function() {
		assert.equal(numParse('0'), 0)
		assert.equal(numParse('5'), 5)
    assert.equal(numParse('5--'), 5)
    assert.equal(numParse('5.5--'), 5.5)
    assert.equal(numParse('+5.5--'), 5.5)
    assert.equal(numParse('text5.5--'), 5.5)
    assert.equal(numParse('text 5.5'), 5.5)
    assert.equal(numParse('text5.5text'), 5.5)
    assert.equal(numParse('text-5.5text'), -5.5)
    assert.equal(numParse('text%&*-5.5text'), -5.5)
    assert.equal(numParse('text--5.5text'), -5.5)
    assert.equal(numParse('test some-5.5m'), -5.5)

    assert.equal(numParse('5,000'), 5000)
    assert.equal(numParse('text 5,000,55'), 500055)
    assert.equal(numParse('5,000.55'), 5000.55)
    assert.equal(numParse('text5,000.55some'), 5000.55)

    assert.equal(numParse('text 5,000 55'), 5000)
    assert.equal(numParse('text 5,000.55 some 100000 other 345'), 5000.55)
	})
  
	it('parse number', function() {
		assert.equal(numParse(0), 0)
		assert.equal(numParse(5), 5)
		assert.equal(numParse(10.55555), 10.55555)
		assert.equal(numParse(0.55555), 0.55555)
		assert.equal(numParse(-4.55555), -4.55555)
	})

	it('invalid values', function() {
		const expect = NaN

		assert.equal(numParse('srt'), expect)
		assert.equal(numParse(''), expect)
		assert.equal(numParse(undefined), expect)
		assert.equal(numParse(null), expect)
		assert.equal(numParse({}), expect)
		assert.equal(numParse([]), expect)
		assert.equal(numParse(true), expect)
		assert.equal(numParse(false), expect)
		assert.equal(numParse(NaN), expect)
		assert.equal(numParse(Infinity), expect)
		assert.equal(numParse(-Infinity), expect)
	})

	it('fallback', function() {
		assert.equal(numParse({ val: 5 }, 0), 0)
		assert.equal(numParse('str', 10), 10)
	})
})
