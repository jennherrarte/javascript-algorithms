list_conflicts = require('./index.js')

test('works', () => {
	expect(list_conflicts([[4,5], [2,3], [3,6], [5,7], [7,8]])).toEqual([[3, 6],[4, 5],[3, 6], [5, 7]]);
});

test('works', () => {
	expect(list_conflicts([[1,2], [3,4], [5,6], [7,8], [9,10]])).toEqual([]);
});

test('works', () => {
	expect(list_conflicts([[1,2], [3,7], [5,6], [7,10], [8,11]])).toEqual([[3,7], [5,6], [7,10], [8,11]]);
});


