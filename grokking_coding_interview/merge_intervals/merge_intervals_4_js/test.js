canAttendMeetings = require('./index.js')

test('works', () => {
	expect(canAttendMeetings([[1,4], [2,5], [7,9]])).toEqual(false);
});

test('works', () => {
	expect(canAttendMeetings([[6,7], [2,4], [8,12]])).toEqual(true);
});

test('works', () => {
	expect(canAttendMeetings([[4,5], [2,3], [3,6]])).toEqual(false);
});


