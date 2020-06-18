'use strict'

module.exports = function numParse(value, fallback = NaN) {
	/**
	 * ref: http://javascript.boxsheep.com/how-to-javascript/How-to-check-if-a-value-is-a-number/
	 */
	const isNumber = (value) => isFinite(value) && +value === value
	const isString = (value) => typeof value === 'string'

	/**
	 * ref: https://stackoverflow.com/q/17885850
	 */
	function parseNumberFromString(str) {
		const matches = str.replace(/,/g, '').match(/(\+|-)?((\d+(\.\d+)?)|(\.\d+))/)
		return matches && matches[0] ? Number(matches[0]) : fallback
	}

	if (isNumber(value)) {
		return Number(value)
	}
	if (isString(value)) {
		return parseNumberFromString(value)
	}
	
	return fallback
}