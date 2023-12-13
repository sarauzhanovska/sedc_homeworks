function atmWithdrawal() {

    let accountBalance = 40000;
    let withdrawalAmountInput = prompt("Enter the amount to withdraw:");
    let withdrawalAmount = parseInt(withdrawalAmountInput);

    if (isNaN(withdrawalAmount)) {
        return "Invalid withdrawal amount";
    }
    if (withdrawalAmount > accountBalance) {
        return "Not enough money";
    }
    accountBalance -= withdrawalAmount;
    return `Amount withdrawn: $${withdrawalAmount} \nRemaining balance: $${accountBalance}`;
}

let result = atmWithdrawal();
alert(result);


