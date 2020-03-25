const stringCalculator = (number) => {
    if(number === '')
        return 0;

    
    const numbers = number.replace('\n', ',').split(',');

    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        total += Number.parseInt(numbers[index]);
    }

    return total;
};

module.exports = stringCalculator;