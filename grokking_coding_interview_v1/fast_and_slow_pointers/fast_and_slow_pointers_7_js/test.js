const find_circular_array_cycle = require('./index')

test('works', () => {expect(find_circular_array_cycle([1, 2, -1, 2, 2])).toEqual(true)})

test('works', () => {expect(find_circular_array_cycle ([2, 2, -1, 2])).toEqual(true)})

test('works', () => {expect(find_circular_array_cycle ([2, 1, -1, -2])).toEqual(false)})

