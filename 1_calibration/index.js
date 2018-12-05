function calibrate(text) {
    return text.split('\n').filter(line => !!line).map(l => parseInt(l)).reduce((prev, cur) => prev + cur, 0);
}

function calibrateDistinct(text) {
    const numbers = text.split('\n').filter(line => !!line).map(l => parseInt(l));
    const tmpRes = [];
    let res = 0;

    let numbersGen = numberGenerator(numbers);
    
    while(!tmpRes.includes(res)) {
        tmpRes.push(res);
        res += numbersGen.next().value; 
    }

    return res;
}

function* numberGenerator(numbers) {
    let i = 0;
    let len = numbers.length;

    while(true) {
        i %= len;
        yield numbers[i];
        i++;
    }
}

module.exports = {
    calibrate,
    calibrateDistinct
}