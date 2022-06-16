function merge_intervals(intervals) {
    if(intervals.length < 2) {
        return intervals
    }

    intervals.sort((a,b) => a.start - b.start)
    let resultsArray = []

    let start = intervals[0].start
    let end = intervals[0].end

    for(i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        if(interval.start <= start) {
            end = Math.max(interval.end, end)
        } else {
        resultsArray.push(new interval(start, end))
        end = interval.end
        start = interval.start
        }
    }

    resultsArray.push(new interval(start, end))
    return resultsArray

    }


module.exports = merge_intervals