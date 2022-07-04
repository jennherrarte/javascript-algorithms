const find_the_missing_number = require('./index')

test('works', () => {
	expect(find_the_missing_number([0,3,2,4])).toEqual(1);
});

test('works', () => {
	expect(find_the_missing_number([0,3,2,5,1])).toEqual(4);
});