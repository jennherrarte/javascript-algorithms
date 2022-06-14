function find_happy_number(num) {
    let fast = num 
    let slow = num

    while(true) {
        fast = find_square(find_square(fast))
        slow = find_square(slow)

        if(fast === slow) {
            break
        }
    }
    return slow === 1
}

function find_square(num) {
    let sum = 0

    while(num > 0) {
        digit = num % 10
        sum += digit * digit 
        num = Math.floor(num / 10)
    }
    return sum 
}

module.exports = find_happy_number