const length_of_longest_substring = require('./index')

test('works', () => {
	expect(length_of_longest_substring("aabccbb", 2)).toEqual(5);
});

test('works', () => {
	expect(length_of_longest_substring("abbcb", 1)).toEqual(4);
});
