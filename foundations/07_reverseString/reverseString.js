const reverseString = function funcName(input) {
    const start = input.length-1
    let result = ''

    for (i=start;i>=0;i--){
        result += input[i]
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
