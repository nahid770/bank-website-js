//function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return amountValue;
}
// update total

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = newDepositTotal;
}
// update balance
function getCurrentBalance (){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    return previousBalanceAmount;
}

function updateBalance(amount, iddAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceTotalText);
     const previousBalanceAmount = getCurrentBalance();
    if(iddAdd == true){
        const newBalanceTotal = previousBalanceAmount + amount;

        balanceTotal.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = previousBalanceAmount - amount;

    balanceTotal.innerText = newBalanceTotal;
    }
    
}


// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input')
    // const  newDepositAmountText = depositInput.value ;
    // const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const newDepositAmount = getInputValue('deposit-input');
if(newDepositAmount > 0){
    updateTotalField('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true);
}

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositTotal = previousDepositAmount + newDepositAmount;

    // depositTotal.innerText = newDepositTotal;
    // updateTotalField('deposit-total', newDepositAmount);

    // update account balance

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;

    // //clear input field
    // depositInput.value = '';
// updateBalance(newDepositAmount, true);
});

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText)  ;
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance ){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance( newWithdrawAmount, false);
    }
    if(newWithdrawAmount > currentBalance ){
        console.log('insufficient balance!')
    }
    // withdrawInput.value = '';
    // set withdraw total

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotal = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawTotal);
    // const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount
    // withdrawTotal.innerText = newWithdrawTotal;
    // updateTotalField('withdraw-total', newWithdrawAmount);
    //update withdraw in balance

    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;
// updateBalance( newWithdrawAmount, false);


});