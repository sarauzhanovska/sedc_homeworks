console.log("Phone Price");

// let numberOfPhones = 30
// let pricePerPhone = 119.95
// let taxRate = 0.05 //5%

// let totalPriceWithoutTax = numberOfPhones * pricePerPhone;
// let taxAmount = totalPriceWithoutTax * taxRate;
// let totalPriceWithTax = totalPriceWithoutTax + taxAmount;

// console.log(totalPriceWithoutTax);
// console.log(taxAmount);
// console.log(totalPriceWithTax);
// ----------------------------------------------
let phonePrice = 119.95;
let phoneQuantity =30;
let taxRate = 5;

let onePhoneWithTax = phonePrice + ( phonePrice * (taxRate /100));
let allPhonesWithTax = onePhoneWithTax * phoneQuantity;
let result = allPhonesWithTax

console.log(result);



