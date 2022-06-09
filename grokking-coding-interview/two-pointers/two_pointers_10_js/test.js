const compare_strings = require('./index') 

test('works', () => {
    expect(compare_strings('z#yxy#z','yxz#y#z')).toEqual(true)
})


test('works', () => {
    expect(compare_strings('zx#yxzz','zxzzy#z')).toEqual(false)
})



test('works', () => {
    expect(compare_strings('zz#zxxxxx####','zy#zz#x')).toEqual(true)
})



