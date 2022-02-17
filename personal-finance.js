// error checking
function errorChecking(error, elementId) {

    if (error == true) {
        document.getElementById(elementId).style.display = 'block';
    }else{
        document.getElementById(elementId).style.display = 'none';
    }
}

// Update Amounts
function updateAmount(field, amount) {
    document.getElementById(field).innerText = amount;
}

// Getting Input Value
function getInputValue(inputId) {
    const element = document.getElementById(inputId);
    const number = parseInt(element.value);
    return number; 
}

// Calculate button click events
document.getElementById('calculate-btn').addEventListener('click', function () {
    
    const income = getInputValue('income-input');

    const foodExpense = getInputValue('food-input');

    const rentExpense = getInputValue('rent-input');

    const clothesExpense = getInputValue('clothes-input');

    const totalExpenses = foodExpense + rentExpense + clothesExpense;

    const balance = income - totalExpenses;

    // update total expenses
    updateAmount('total-expenses', totalExpenses);

    //Checking balance should be updated or errors 
    if (totalExpenses > income) {
        errorChecking(true, 'error-expenses');
        updateAmount('balance', 000);
    } else {
        errorChecking(false, 'error-expenses');
        updateAmount('balance', balance);
    }

});