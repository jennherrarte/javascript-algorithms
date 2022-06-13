const find_string_anagrams = require('./index')

test('works', () => {
	expect(find_string_anagrams("ppqp", "pq")).toEqual([1,2]);
});

test('works', () => {
	expect(find_string_anagrams("abbcabc", "abc")).toEqual([2,3,4]);
});