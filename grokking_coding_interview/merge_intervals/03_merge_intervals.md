# Merge Interals

## Table of contents
1. [Merge Intervals (medium)](#Merge-Intervals)
2. [Insert Interval (medium)](#Insert-Interval)
3. [Intervals Intersection(medium)](#Intervals-Intersection)
4. [Conflicting Appointments (medium)](#Conflicting-Appointments)
4.5. [List Conflicting Appointments](#List-Conflicting-Appointments)

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
> **Time: O(N)**<br>
> **Space: O(N)**

### Intervals Intersection
```
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
```
```
**Example 1:**
Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]

**Example 2:**
Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
```

```js
// this is the leetcode answer as it works better with jest test cases
function interval_intersection(firstList, secondList) {
  let mergedList = [];

  let i = 0,
    j = 0;

  while (i < firstList.length && j < secondList.length) {
    let first_overlaps_second =
      firstList[i][0] >= secondList[j][0] &&
      firstList[i][0] <= secondList[j][1];

    let second_overlaps_first =
      secondList[j][0] >= firstList[i][0] &&
      secondList[j][0] <= firstList[i][1];

    if (first_overlaps_second || second_overlaps_first) {
      mergedList.push([
        Math.max(firstList[i][0], secondList[j][0]),
        Math.min(firstList[i][1], secondList[j][1]),
      ]);
    }

    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return mergedList;
}

```

> **Time: O(N+M)**<br>
> **Space: O(1)**


### Conflicting Appointments
```
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
```
```
**Example 1:**
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

**Example 2:**
Input: intervals = [[7,10],[2,4]]
Output: true
```
```js
// this is the leetcode answer as it works better with jest test cases
function canAttendMeetings (intervals) {
    
    intervals.sort((a, b) => a[0] - b[0])
    
    for(i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < intervals[i-1][1]) {
            return false
        }
    }
    
    return true
};
```
> **Time: O(N * logN)**<br>
> **Space: O(N)**

### List Conflicting Appointments
```
Given a list of appointments, find all the conflicting appointments.
```
```
**Example 1:**
Appointments: [[4,5], [2,3], [3,6], [5,7], [7,8]]
Output: 
[4,5] and [3,6] conflict. 
[3,6] and [5,7] conflict.
```
```js
function list_conflicts(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let conflicting_intervals = [];

  for (i = 0; i < intervals.length; i++) {
    for (j = i + 1; j < intervals.length; j++) {
      if (
        intervals[i][1] > intervals[j][0] ||
        intervals[i][1] > intervals[j][1]
      ) {
        conflicting_intervals.push(intervals[i], intervals[j]);
      }
    }
  }
  return conflicting_intervals;
}
```
> **Time: O(N * logN)**<br>
> **Space: O(N)**