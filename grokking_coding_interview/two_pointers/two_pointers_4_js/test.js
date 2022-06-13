const find_triplets = require('./index')

test('works', () => {
	expect(find_triplets([-3, 0, 1, 2, -1, 1, -2])).toEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
});

test('works', () => {
	expect(find_triplets([-5, 2, -1, -2, 3])).toEqual([[-5, 2, 3], [-2, -1, 3]]);
});