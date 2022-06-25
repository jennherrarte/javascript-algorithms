// this is the leetcode version because it's easier to create a  test for the LC structure

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

module.exports = interval_intersection;