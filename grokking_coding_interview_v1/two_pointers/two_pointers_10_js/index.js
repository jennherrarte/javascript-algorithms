function compare_strings(str1, str2) {
    let index1 = str1.length - 1
    let index2 = str2.length - 1

    while(index1 >= 0 || index2 >= 0) {
        
        let i1 = get_valid_idx(str1, index1)
        let i2 = get_valid_idx(str2, index2)
        
        if(i1 < 0  && i2 < 0) {
            return true
        }

        if(i1 < 0 || i2 < 0) {
            return false 
        }

        if(str1[i1] !== str2[i2]) {
            return false
        }

        index1 = i1 - 1
        index2 = i2 - 1


    }

    return true
}

function get_valid_idx(str, index) {
    let backspace = 0

    while (index >= 0) {
        
        if(str[index] === '#') {
            backspace += 1
        } 
        else if (backspace > 0) {
            backspace -=  1
        } else  {
            break
        }

      index -= 1

    }

    return index
}

module.exports = compare_strings