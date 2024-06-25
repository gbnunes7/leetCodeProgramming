// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
    let NumberAsString = digits.join('')    
    NumberAsString = BigInt(NumberAsString) // Uso de Big Int para lidar com números arbitrariamente grande
    NumberAsString = NumberAsString + 1n // somando 
    return NumberAsString.toString().split('') // retornando como array
};

//Runtime: 54ms Memory:49.3Mb
// Feito em 10 minutos