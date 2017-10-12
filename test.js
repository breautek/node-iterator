'use strict';

var Iterator = require('./lib/Iterator');

var data = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
];

var iter = new Iterator(data);

console.log('Printing some...\n');
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log('resetting\n');
iter.reset();

console.log('Iterating forward...\n');
while (iter.hasNext()) {
	console.log(iter.next());
}

console.log('Iterating backwards...\n');
while (iter.hasPrevious()) {
	console.log(iter.previous());
}
