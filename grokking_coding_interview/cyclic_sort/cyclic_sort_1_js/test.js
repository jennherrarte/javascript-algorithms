const cyclic_sort = require('./index')

test('works', () => {
	expect(cyclic_sort([3,6,2,5,4,1])).toEqual([1,2,3,4,5,6]);
});

test('works', () => {
	expect(cyclic_sort([8,3,7,5,2,4,1,6])).toEqual([1,2,3,4,5,6,7,8]);
});