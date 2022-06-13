const find_quadruplets = require('./index') 

test('works', () => {
    expect(find_quadruplets([2, 2, 2, 2, 2, 2], 5)).toEqual([]) // supposed to  be empty
})

test('works', () => {
    expect(find_quadruplets([-4, -4, -2, -1, -1, -1], 4)).toEqual([]) // supposed to  be empty
})

test('works', () => {
    expect(find_quadruplets([-1,7,2,4,2,1], 4)).toEqual([[-1, 1, 2, 2]])
})

test('works', () => {
    expect(find_quadruplets([-3, -1, 1, 2, 3, 4], 1)).toEqual([[-3,  -1, 1, 4 ], [-3, -1, 2, 3]])
})


test('works', () => {
    expect(find_quadruplets([4, 1, 2, -1, 1, -3], 1)).toEqual([[-3, -1, 1, 4], [-3, 1, 1, 2]])
})


