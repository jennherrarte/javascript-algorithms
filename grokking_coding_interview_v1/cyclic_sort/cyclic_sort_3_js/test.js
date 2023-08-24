const find_all_missing_nums = require('./index')

test('works', () => {
	expect(find_all_missing_nums([2, 3, 1, 8, 2, 3, 5, 1])).toEqual([4,6,7]);
});

test('works', () => {
	expect(find_all_missing_nums([2, 4, 1, 2])).toEqual([3]);
});