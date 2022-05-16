function make_squares(arr) {
	let n = arr.length
	let squares = Array(n).fill(0)
	let right = n - 1
	let left = 0
	let highestSquareIdx = n - 1
	
	while(left < right) {
		let rightSquare = arr[right] * arr[right]
		let leftSquare = arr[left] * arr[left]
		
		if(rightSquare > leftSquare) {
			squares[highestSquareIdx] = rightSquare
			right--
		} else {
			squares[highestSquareIdx] = leftSquare
			left++
		}
		highestSquareIdx--
	}
	
	return squares

}

module.exports = make_squares;