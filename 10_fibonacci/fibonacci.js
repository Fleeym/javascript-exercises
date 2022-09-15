const fibonacci = function (number) {
    if (number < 0) {
        return 'OOPS';
    }
    let maxIterations = number - 2;
    if (typeof number === 'string') {
        maxIterations = Number(number) - 2;
    }
    let x = 0;
    let y = 1;
    for (let i = 0; i < maxIterations; i++) {
        const temp = x + y;
        x = y;
        y = temp;
        console.log({ x, y, temp });
    }
    return x + y;
};

// Do not edit below this line
module.exports = fibonacci;
