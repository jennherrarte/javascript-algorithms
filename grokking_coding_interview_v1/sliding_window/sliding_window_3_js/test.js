const longest_substring_with_k_distinct = require('./index')

test('works', () => {
	expect(longest_substring_with_k_distinct(2, "araaci")).toEqual(4);
});

test('works', () => {
	expect(longest_substring_with_k_distinct(1, "araaci")).toEqual(2);
});


