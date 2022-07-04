const find_all_missing_nums = require('./index')

test('works', () => {
	expect(find_all_missing_nums([1, 4, 4, 3, 2])).toEqual(4);
});

test('works', () => {
	expect(find_all_missing_nums([2, 1, 3, 3, 5, 4])).toEqual(3);
});

test('works', () => {
	expect(find_all_missing_nums([2, 4, 1, 4, 4])).toEqual(4);
});

