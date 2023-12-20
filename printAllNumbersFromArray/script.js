const numbers = [1, 2, 3, 4, 5, 6, 7];

function printAllNumbers(prt) {
    let items = "";
    for (let i = 0; i < prt.length; i++) {
        items += `<li>${prt[i]} </li>`;
    }
    return items;
}

document.querySelector("div").innerHTML = `
<ul>
${printAllNumbers(numbers)}
</ul>
`;

function sumOfALL(numbers) {
    let sum = 0;
    for (let a of numbers) {
        sum += a;
    }
    return sum;

}
document.getElementById('secondDiv').innerHTML = `
${sumOfALL(numbers)}
`;