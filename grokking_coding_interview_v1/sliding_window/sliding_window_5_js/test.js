const non_repeat_substring = require('./index')

test('works', () => {
	expect(non_repeat_substring("aabccbb")).toEqual(3);
});

test('works', () => {
	expect(non_repeat_substring("abbbb")).toEqual(2);
});