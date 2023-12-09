console.log('Calculate Chinese Zodiac');

// function calculateChineseZodiac(year) {
//     return (year - 4) % 12;
// }

// function chineseZodiac (){
//     let user = prompt(`Enter a year and find its Chinese Zodiac`)

//     let year = parseInt(user);

//     if (isNaN(year)){
//         alert('Please enter a valid number')
//     }
//     else {
//         let zodiacIndex = calculateChineseZodiac (year);
//         let zodiacSigns = [
//             "Rat", "Ox", "Tiger", "Rabbit",
//             "Dragon", "Snake", "Horse", "Goat",
//             "Monkey", "Rooster", "Dog", "Pig"
//         ];
//         alert(year + " is the year of the " + zodiacSigns[zodiacIndex] + ".");
//     }
//     console.log(calculateChineseZodiac);


// }


let birthyear = parseInt(prompt('Enter your birth year.'));
let zodiac = (birthyear - 4) % 12 ;

if (zodiac == 0) {
    alert(`Your sign is a RAT`)
}
else if (zodiac == 1){
    alert(`Your sign is an OX`)
}
else if (zodiac == 2){
    alert(`Your sign is TIGER`)
}
else if (zodiac == 3){
    alert(`Your sign is a RABBIT`)
}
else if (zodiac == 4){
    alert(`Your sign is a DRAGON`)
}
else if (zodiac == 5){
    alert(`Your sign is a SNAKE`)
}
else if (zodiac == 6){
    alert(`Your sign is a HORSE`)
}
else if (zodiac == 7){
    alert(`Your sign is a GOAT`)
}
else if (zodiac == 8){
    alert(`Your sign is a MONKEY`)
}
else if (zodiac == 9){
    alert(`Your sign is a ROOSTER`)
}
else if (zodiac == 10){
    alert(`Your sign is a DOG`)
}
else if (zodiac == 11){
    alert(`Your sign is a PIG`)
}
else{
    alert (`TRY AGAIN WITH VALIDE YEAR!!!`)
}

