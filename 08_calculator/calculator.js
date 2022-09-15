const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (array) {
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((x, y) => x + y);
};

const multiply = function (numbers) {
    return numbers.reduce((x, y) => x * y, 1);
};

const power = function (number, power) {
    let result = number;
    for (let i = 0; i < power - 1; i++) {
        result *= number;
    }
    return result;
};

const factorial = function (number) {
    if (number === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
