const max_sub_array_of_size_k = require('./index');

test('works', () => {
	expect(max_sub_array_of_size_k(3, [ 2, 1, 5, 1, 3, 2 ])).toEqual(9);
});

test('works', () => {
	expect(max_sub_array_of_size_k(2, [ 2, 3, 4, 1, 5 ])).toEqual(7);
});


