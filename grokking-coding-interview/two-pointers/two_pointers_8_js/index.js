function dutch_flag_sort(arr) { 

  if(arr.length === 0 || arr.length === null) {
    return 0
  }
    let low = 0,
      high = arr.length - 1,
      i = 0;
    while (i <= high) {
      if (arr[i] === 0) {
        [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
        // increment 'i' and 'low'
        i += 1;
        low += 1;
      } else if (arr[i] === 1) {
        i += 1;
      } else { // the case for arr[i] === 2
        [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
        // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
        high -= 1;
      }
    }

    return arr
  }

  module.exports = dutch_flag_sort;