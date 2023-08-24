function fruits_in_a_basket(fruits) {

    let windowStart = 0;
    let fruitFreq = {};
    let maxLength = -Infinity 
    
    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        
        let rightChar = fruits[windowEnd]
        
        if(!(rightChar in fruitFreq)) {
            fruitFreq[rightChar] = 0;
        }
        fruitFreq[rightChar] += 1;
        
        while(Object.keys(fruitFreq).length > 2) {
            let leftChar = fruits[windowStart];
            fruitFreq[leftChar] -= 1

            if(fruitFreq[leftChar] === 0) {
                delete fruitFreq[leftChar]
            }
                windowStart++
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
};

module.exports = fruits_in_a_basket;