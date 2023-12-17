function findMinAndMax() {

    let array = [3, 4, 6, 8, 10,];
    
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);

    let sum = minValue + maxValue;

    console.log(`Minimum number is:` + minValue);
    console.log(`Maximum number is:` + maxValue);
    console.log(`The sum of min and max is: ${sum}`);

}
findMinAndMax();

