const remove_duplicates = require('./index')

test('works', () => {
	expect(remove_duplicates([2, 3, 3, 3, 6, 9, 9])).toEqual(4);
});

test('works', () => {
	expect(remove_duplicates([2, 2, 2, 11])).toEqual(2);
});