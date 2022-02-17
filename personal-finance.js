// error checking
function errorChecking(error, elementId) {

    if (error == true) {
        document.getElementById(elementId).style.display = 'block';
    } else {
        document.getElementById(elementId).style.display = 'none';
    }
}

// Update Amounts
function updateAmount(field, amount) {
    document.getElementById(field).innerText = amount;
}

// Getting Input Value
function getInputValue(inputId) {

    const element = document.getElementById(inputId + '-input');
    const number = parseInt(element.value);
    // console.log(number);

    // Input Validation: Positive number or not
    if (number < 0 || isNaN(number)) {
        errorChecking(true, inputId + "-error");
    } else {
        errorChecking(false, inputId + "-error");
        return number;
    }
}
// Getting Text Values

function getTextValue(textId) {
    const element = document.getElementById(textId);
    const number = parseInt(element.innerText);
    return number;
}

// Calculate button click events
document.getElementById('calculate-btn').addEventListener('click', function () {

    const income = getInputValue('income');

    const foodExpense = getInputValue('food');

    const rentExpense = getInputValue('rent');

    const clothesExpense = getInputValue('clothes');

    const totalExpenses = foodExpense + rentExpense + clothesExpense;

    const balance = income - totalExpenses;

    // update total expenses
    updateAmount('total-expenses', totalExpenses);

    //Checking balance should be updated or errors 
    if (totalExpenses > income) {
        errorChecking(true, 'error-expenses');
        updateAmount('balance', 000);
    } else if (isNaN(totalExpenses) || isNaN(income)) {
        updateAmount('balance', 000);
        updateAmount('total-expenses', 000);
    } else {
        errorChecking(false, 'error-expenses');
        updateAmount('balance', balance);
    }
});

// Save Button handle savings
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeValue = getInputValue('income');
    console.log(incomeValue);

    const balanceValue = getTextValue('balance');
    console.log(balanceValue);


    const savePercentage = getInputValue('save');


    const savingAmount = incomeValue * (savePercentage / 100);


    const remainingBalance = balanceValue - savingAmount;

    if (savingAmount > balanceValue && balanceValue>1) {

        errorChecking(true, 'saving-error');

        document.getElementById('saving-error').innerText += " Saving amount becomes " + savingAmount + " It is greater than balance " + balanceValue + " So, It is not allowed. ";

        updateAmount('saving-amount', 000);
        updateAmount('remaining-balance', 000);

    } else if(balanceValue<1){
        updateAmount('saving-amount', 000);
        updateAmount('remaining-balance', 000);
        errorChecking(false, 'saving-error');
    }else {
        updateAmount('saving-amount', savingAmount);
        updateAmount('remaining-balance', remainingBalance);
        errorChecking(false, 'saving-error');

        document.getElementById('saving-error').innerText = "";
    }


    // update saving amount 
    // updateAmount('saving-amount',savingAmount);
    // // update remaining Balance
    // updateAmount('remaining-balance',remainingBalance);


});