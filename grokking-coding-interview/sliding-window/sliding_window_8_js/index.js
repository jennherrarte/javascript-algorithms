function find_permutation(string, pattern) {
    let windowStart = 0;
    let match = 0;
    let charMap = {};

    for (i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        if (!(char in charMap)) {
            charMap[char] = 0

            charMap[char] += 1;
        };
    }
    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        let rightChar = string[windowEnd]

        if (rightChar in charMap) {
            charMap[rightChar] -= 1
            if (charMap[rightChar] === 0) {
                match += 1
            }
        };

        if (match === Object.keys(charMap).length) {
            return true
        }

        if (windowEnd >= pattern.length - 1) {
            let leftChar = string[windowStart];
            windowStart += 1;

            if (leftChar in charMap) {
                if (charMap[leftChar] === 0) {
                    match = -1
                }
                charMap[leftChar] += 1
            }
        }
    }
    return false;
}

module.exports = find_permutation;