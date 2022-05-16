function find_substring(str, pattern) {
	let windowStart = 0;
	let matched = 0;
	let charFreq = {};
	let substrStart = 0;
	let minLength = Infinity; 
	
	for(i = 0; i < pattern.length; i++) {
		let char = pattern[i];
		if(!(char in charFreq)) {
			charFreq[char] = 0;
		}
		charFreq[char] += 1
	}
	
	for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let rightChar = str[windowEnd];
		
		if(rightChar in charFreq) {
			charFreq[rightChar] -= 1; 
			
			if(charFreq[rightChar] >= 0) { 
				matched++
			}
		}
		
		while(pattern.length === matched) {
			if(minLength > windowEnd - windowStart + 1) {
				minLength = windowEnd - windowStart + 1
				substrStart = windowStart 
			}
			
			let leftChar = str[windowStart] 
			windowStart++ 
			
			if(leftChar in charFreq) {
				if(charFreq[leftChar] === 0) {
					matched--
				}
				charFreq[leftChar] += 1
			}
		}
	}
	
	if(minLength > str.length) {
		return ''
	}
	
	return str.substring(substrStart, substrStart + minLength)
}

module.exports = find_substring;