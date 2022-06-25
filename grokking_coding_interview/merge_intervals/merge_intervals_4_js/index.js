// this is the leetcode version because it's easier to create a  test for the LC structure

function canAttendMeetings (intervals) {
    
    intervals.sort((a, b) => a[0] - b[0])
    
    for(i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < intervals[i-1][1]) {
            return false
        }
    }
    
    return true
};

module.exports = canAttendMeetings