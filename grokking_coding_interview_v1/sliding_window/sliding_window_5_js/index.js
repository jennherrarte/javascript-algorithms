function non_repeat_substring(str) {
    let  maxLength  = -Infinity,
         charIndexMap = {},
         windowStart  = 0;

    for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd]

        if(rightChar in charIndexMap) {
            windowStart = Math.max(maxLength, charIndexMap[rightChar] + 1)
        }

        charIndexMap[rightChar] = windowEnd
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)

    }
    return maxLength;   
 }

 module.exports = non_repeat_substring;