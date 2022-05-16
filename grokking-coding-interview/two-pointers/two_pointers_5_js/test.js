const triplet_sum_close_to_target = require('./index')

test('works', () => {
	expect(triplet_sum_close_to_target([-2, 0, 1, 2], 2)).toEqual(1);
});

test('works', () => {
	expect(triplet_sum_close_to_target([-3, -1, 1, 2], 1)).toEqual(0);
});