const length_of_longest_substring = require('./index')

test('works', () => {
	expect(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)).toEqual(6);
});

test('works', () => {
	expect(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)).toEqual(9);
});
