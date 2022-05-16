const smallest_subarray_with_given_sum = require('./index')

test('works', () => {
	expect(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])).toEqual(1);
});

test('works', () => {
	expect(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])).toEqual(3);
});

