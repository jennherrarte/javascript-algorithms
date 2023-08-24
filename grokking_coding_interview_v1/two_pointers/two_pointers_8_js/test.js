const dutch_flag_sort = require('./index')

test('works', () => {
	expect(dutch_flag_sort([1, 0, 2, 1, 0])).toEqual([0, 0, 1, 1, 2]);
});

test('works', () => {
	expect(dutch_flag_sort([2, 2, 0, 1, 2, 0])).toEqual([0, 0, 1, 2, 2, 2,]);
});