const repeatString = function funcOne (a, b) {
    let result = []
    if (typeof b != 'number' || b < 0)  {
        return 'ERROR'
    }
    
    for (i=0;i<b;i++){
        result.push(a)
    }
    return result.join("")
};

// Do not edit below this line
module.exports = repeatString;
