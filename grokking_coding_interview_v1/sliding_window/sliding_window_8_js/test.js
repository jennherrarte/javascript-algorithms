const find_permutation = require('./index')

test('works', () => {
	expect(find_permutation("oidbcaf", "abc")).toEqual(true);
});

test('works', () => {
	expect(find_permutation("odicf", "dc")).toEqual(false);
});