# Merge Interals

## Table of contents
1. [Merge Intervals (medium)](#Merge-Intervals)
2. [Insert Interval (medium)](#Insert-Interval)

### Merge Intervals

```
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
```
```
**Example 1:**
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
one [1,5].

**Example 2:**
Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

**Example 3:**
Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.
```
```js

function merge_intervals(intervals) {
    if(intervals.length < 2 ) {
        return intervals
    }

    intervals.sort((a,b) => a.start - b.start)
    let mergedIntervals = []

    let start = intervals[0].start
    let end = intervals[0].end

    for(i = 1; i < intervals.length; i++) {
        let interval = intervals[i]

        if(interval.start <= end) {
            end = Math.max(end, interval.end)
        } else {
            mergedIntervals.push(new Interval(start,end)) 
            start = interval.start
            end = interval.end
        }
    }

    mergedIntervals.push(new Interval(start,end)) 
    return mergedIntervals
}
```
> **Time: O(N * logN)**<br>
> **Space: O(N)**

### Insert Interval
```
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
```
```
**Example 1:**
Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

**Example 2:**
Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

**Example 3:**
Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
```
```js
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

```
> **Time: O(N**<br>
> **Space: O(N)**
