const find_missing_dupes = require('./index')

test('works', () => {
	expect(find_missing_dupes([1,5,2,7,4,3,2,6])).toEqual(2);
});

test('works', () => {
	expect(find_missing_dupes([1,5,3,7,4,2,3,6])).toEqual(3);
});
