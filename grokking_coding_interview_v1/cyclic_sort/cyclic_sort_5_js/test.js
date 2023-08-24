const find_all_duplicates = require('./index')

test('works', () => {
	expect(find_all_duplicates([3, 4, 4, 5, 5])).toEqual([5, 4]);
});

test('works', () => {
	expect(find_all_duplicates([5, 4, 7, 2, 3, 5, 3])).toEqual([3,5]);
});

