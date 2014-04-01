exports.TWO_PI = (function() {
	return Math.PI * 2;
})();

exports.HALF_PI = (function() {
	return Math.PI * 0.5;
})();

/**
 * Converts a given value in degrees to radians
 * @param {Number} deg
 * @returns {Number}
 */
exports.degreesToRadians = function(deg) {
	return (deg * Math.PI) / 180;
};

/**
 * Converts a given value in radians to degrees
 * @param {Number} rad
 * @returns {Number}
 */
exports.radiansToDegrees = function(rad) {
	return (180 * rad) / Math.PI;
};

/**
 * Takes a 'value' within a given range and converts it to a number between 0 and 1.
 * @param {Number} value
 * @param {Number} minimum
 * @param {Number} maximum
 * @returns {Number}
 */
var normalize = exports.normalize = function(value, min, max) {
	if (min === max) {
		return 1;
	} else {
		return (value - min) / (max - min);
	}
};

/**
 * Takes a normalized value and a range and returns the actual value in that range.
 * @param {Number} normValue
 * @param {Number} minimum
 * @param {Number} maximum
 * @returns {Number}
 */
var interplate = exports.interpolate = function(normValue, min, max) {
	return min + (max - min) * normValue;
};

/**
 * Takes a value in a given range (min1, max1) and finds the corresonding value in the next range (min2, max2).
 * @param {Number} value
 * @param {Number} min1
 * @param {Number} max1
 * @param {Number} min2
 * @param {Number} max2
 * @returns {Number}
 */
var map = exports.map = function(value, min1, max1, min2, max2) {
	return interplate(normalize(value, min1, max1), min2, max2);
};

/**
 * Takes a value and limits it to fall within a given range.
 * @param {Number} value
 * @param {Number} minimum
 * @param {Number} maximum
 * @returns {Number}
 */
var limit = exports.limit = function(value, min, max) {
	return Math.min(Math.max(min, value), max);
};

/**
 * Generates a random number between a given range.
 * @param {Number} low
 * @param {Number} high
 * @returns {Number}
 */
var rangedRandom = exports.rangedRandom = function(low, high) {
	return map(Math.random(), 0, 1, low, high);
};

/**
 * Rounds a value to the number of specified decimal places
 * @param {Number} value
 * @param {Number} decimalPlaces
 * @returns {Number}
 */
exports.round = function (value, decimalPlaces) {
	var parts = value.toString().split('.')
		, pre = parts[0] + parts[1].substr(0, decimalPlaces)
		, post = parts[1].slice(decimalPlaces)
		, postRound = Math.round(post/Math.pow(10, (post.length)))
		, places = Math.pow(10, (decimalPlaces || 0));

	return (parts[1].length <= decimalPlaces) ? value : (+pre + postRound) / places;
};