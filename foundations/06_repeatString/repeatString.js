const repeatString = function (string, num) {
    let hold = "";
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            hold += string;
        }
    } else if (num < 0) {
        return "ERROR";
    }
    return hold;
};

// Do not edit below this line
module.exports = repeatString;
