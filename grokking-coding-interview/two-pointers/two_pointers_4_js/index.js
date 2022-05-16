function find_triplets(arr) { // not  working
	let triplets = [ ];
	arr.sort((a,b) => a - b)
	
	for(i = 0; i < arr.length; i++) {
		if(i > 0 && arr[i] === arr[i - 1]) {
			continue;
		}
		search_triplets(arr, -arr[i], i + 1, triplets)
	}
	return triplets
}

function search_triplets(arr, target_sum, left, triplets) {
let right = arr.length - 1
	while(left < right) {
	let current_sum = arr[left] + arr[right]
	
	if(target_sum === current_sum) {
		triplets.push([-target_sum, arr[right], arr[left]])
		right--
		left++
		
		while(left < right && arr[left] === arr[left - 1]) {
			left++
		}
		
		while(left < right && arr[right] === arr[right + 1]) {
			right--
		}
	
	} else if (target_sum > current_sum) {
		left++
	
	} else {
		right--
  }
 }
}
module.exports = find_triplets;