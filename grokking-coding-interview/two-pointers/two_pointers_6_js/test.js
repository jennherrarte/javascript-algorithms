const triplet_with_smaller_sum = require('./index')

test('works', () => {
	expect(triplet_with_smaller_sum([-1, 0, 2, 3], 3)).toEqual(2);
});

test('works', () => {
	expect(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5)).toEqual(4);
});