const find_product_subarray = require('./index')

test('works', () => {
	expect(find_product_subarray([2, 5, 3, 10], 30)).toEqual([2], [5], [2, 5], [3], [5, 3], [10]);
});

test('works', () => {
	expect(find_product_subarray([8, 2, 6, 5], 50)).toEqual([8], [2], [8, 2], [6], [2, 6], [5], [6, 5] );
});