function length_of_longest_substring(str, k) {
    let windowStart = 0,
      maxLength = 0,
      maxRepeatLetterCount = 0,
      frequencyMap = {};
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in frequencyMap)) {
        frequencyMap[rightChar] = 0;
      }
      frequencyMap[rightChar] += 1;
      maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);
      if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
        leftChar = str[windowStart];
        frequencyMap[leftChar] -= 1;
        windowStart += 1;
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }

module.exports = length_of_longest_substring;
