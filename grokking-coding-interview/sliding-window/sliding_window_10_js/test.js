const find_substring = require('./index');

test('works', () => {
	expect(find_substring("aabdec", "abc")).toEqual("abdec");
});

test('works', () => {
	expect(find_substring("aabdec", "abac")).toEqual("aabdec");
});