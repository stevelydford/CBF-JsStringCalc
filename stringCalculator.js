const stringCalculator = (number) => {
    if(number === '')
        return 0;

    let numbers;
    
    if(number.startsWith('//')){
        numbers = splitByCustomSeparator(number);
    }
    else {
        numbers = number.replace('\n', ',').split(',');
    }
    
    let total = 0;
    let negativeNumbers = '';

    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = Number.parseInt(numbers[index]);
        
        if(currentNumber < 0){
            negativeNumbers += ' ' + currentNumber;
        }
        total += currentNumber;
    }

    if(negativeNumbers.length > 0) {
        let errorMessage = 'negatives not allowed:';
        return  errorMessage + negativeNumbers;
    }

    return total;
};

function splitByCustomSeparator(number) {
    let customSeparator = number.substring(2, 3);
    number = number.substring(4);
    return number.split(customSeparator);
}

module.exports = stringCalculator;