function insert_interval (intervals, new_interval) {
    let merged = [],
    i = 0;

    while(i < intervals.length && intervals[i].end < new_interval.start) {
        merged.push(intervals[i]);
        i+= 1;
    }

    while(i < intervals.length && intervals[i].start <= new_interval.end) {
        new_interval.start = Math.min(intervals[i].start, new_interval.start);
        new_interval.end = Math.max(intervals[i].end, new_interval.end);
        i += 1;
    }

    merged.push(new_interval)

    while(i < intervals.length) {
        merged.push(intervals[i]);
        i += 1
    }

    return merged;
}