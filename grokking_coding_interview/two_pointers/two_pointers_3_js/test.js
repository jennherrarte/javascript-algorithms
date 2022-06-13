const make_squares = require('./index')

test('works', () => {
	expect(make_squares([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9]);
});

test('works', () => {
	expect(make_squares([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9]);
});