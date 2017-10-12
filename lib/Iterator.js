'use strict';

class Iterator {
	constructor(collection) {
		if (!(collection instanceof Array)) {
			throw new Error('First parameter of Iterator should be an Array');
		}

		this._data = collection.slice();
		this._cursor = 0;
	}

	hasNext() {
		return this._cursor < this._data.length;
	}

	next() {
		return this._data[this._cursor++];
	}

	hasPrevious() {
		return this._cursor > 0 && this._data.length > 0;
	}

	previous() {
		return this._data[--this._cursor];
	}

	reset() {
		this._cursor = 0;
	}
};

module.exports = Iterator;
