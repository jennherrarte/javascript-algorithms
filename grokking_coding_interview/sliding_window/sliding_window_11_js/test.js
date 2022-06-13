const find_word_concat = require('./index');

test('works', () => {
	expect(find_word_concat('catfoxcatfox', ['cat', 'fox'])).toEqual([0, 3, 6]);
});

test('works', () => {
	expect(find_word_concat('catcatfoxfox', ['cat', 'fox'])).toEqual([3]);
});

test('works', () => {
	expect(find_word_concat('catcat', ['cat', 'fox'])).toEqual([]);
});


