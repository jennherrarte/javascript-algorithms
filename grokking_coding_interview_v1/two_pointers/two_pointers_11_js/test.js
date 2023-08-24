const sort_array  = require('./index') 

test('works', () => {
    expect(sort_array([-1,5,3,4,2,0,9,11])).toEqual(5)
})

test('works', () => {
    expect(sort_array([1,3,7,8,9,11,17,44])).toEqual(0)
})


test('works', () => {
    expect(sort_array([1,4,-5,7,8,-3,0,3])).toEqual(8)
})






