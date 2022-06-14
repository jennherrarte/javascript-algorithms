const find_happy_number = require('./index');

test('works', () => {
	expect(find_happy_number(23)).toEqual(true);
});

test('works', () => {
	expect(find_happy_number(12)).toEqual(false);
});
