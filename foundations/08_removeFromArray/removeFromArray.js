const removeFromArray = function(array, ...remove) {
    /*
    let result = [];
    
    for (let i = 0; i < array.length; i++){
        if(!remove.includes(array[i])) result.push(array[i]);
    }

    return result; */

    return array.filter(item => !remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
