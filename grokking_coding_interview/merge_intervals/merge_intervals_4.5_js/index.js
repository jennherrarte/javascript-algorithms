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

module.exports = list_conflicts;
