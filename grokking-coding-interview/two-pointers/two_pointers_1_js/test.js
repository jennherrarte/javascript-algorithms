const pair_with_target_sum = require('./index');

test('works', () => {
	expect(pair_with_target_sum([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
});

test('works', () => {
	expect(pair_with_target_sum([2, 5, 9, 11], 11)).toEqual([0, 2]);
});