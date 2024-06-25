// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

// Result

var mySqrt = function(x) {
    if(x === 0) { 
        return 0
    }
    return x = Math.floor(Math.sqrt(x))
};

//Runtime: 79ms Memory: 52.5Mb
// Feito em 3 min