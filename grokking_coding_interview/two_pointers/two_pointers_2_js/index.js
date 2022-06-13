function remove_duplicates(arr) {

    if(arr.length === 0 || arr.length === null) {
      return 0
    }
    
      let nextNonDupe = 1
      let i = 0
      
      while(i < arr.length) {
          if(arr[nextNonDupe - 1] !== arr[i]) {
              arr[nextNonDupe] = arr[i]
              nextNonDupe++
          }
          i++
      }
      return nextNonDupe
  }

  module.exports = remove_duplicates