const fruits_in_a_basket = require('./index')

test('works', () => {
	expect(fruits_in_a_basket(['A', 'B', 'C', 'A', 'C'])).toEqual(3);
});

test('works', () => {
	expect(fruits_in_a_basket(['A', 'B', 'C', 'B', 'B', 'C'])).toEqual(5);
});
