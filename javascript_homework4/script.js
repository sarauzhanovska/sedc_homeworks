console.log("Calculate Ages");

// HUMAN YEARS TO DOG YEARS

// function calculateDogYears(humanYears) {


// if (typeof humanYears === "number" && humanYears > 0) {

//     let dogYears = humanYears * 7;
//     return `Your dog's age in dog years is: ${dogYears}`;
// }
// else {
//     return 'Please enter a valid positive number for human years.';
// }

// }

// console.log(calculateDogYears(3));
// console.log(calculateDogYears(7));

// // DOG YEARS TO HUMAN YEARS 

// function calculateHumanYears(dogYears) {


//     if (typeof dogYears === "number" && dogYears > 6) {

//         let humanYears = dogYears / 7;
//         return `Human's age in dog years is: ${humanYears}`;
//     }
//     else {
//         return 'Please enter a number greater than 6';
//     }

//     }

//     console.log(calculateHumanYears(14));
//     console.log(calculateHumanYears(7));
//     console.log(calculateHumanYears(5));
//     console.log(calculateHumanYears(28));

function calculateDogAge(age, HumanYears = false) {
    if (HumanYears) {
        return age / 7;
    } else {
        return age * 7;
    }
}

console.log("Dog's age in dog years: " + calculateDogAge(4, false));
console.log("Dog's age in dog years: " + calculateDogAge(7,false));
console.log("Dog's age in human years: " + calculateDogAge(28, true));
console.log("Dog's age in human years: " + calculateDogAge(49, true));