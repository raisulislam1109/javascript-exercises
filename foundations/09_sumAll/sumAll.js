const sumAll = function(a, b) {
    if ( !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return "ERROR"

    let  min = Math.min(a,b);
    let max = Math.max(a,b);
    let result = 0;
    for (let i= min; i <= max; i++ )
        result +=  i;

    return result
};

// Do not edit below this line
module.exports = sumAll;
