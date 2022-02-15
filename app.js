//function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const  inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return amountValue;  
}
// update total

function updateTotalField (totalFieldId, amount){
const totalElement = document.getElementById(totalFieldId);
const totalText = totalElement.innerText;
const previousTotal = parseFloat(totalText);

const newDepositTotal = previousTotal + amount;
totalElement.innerText = newDepositTotal;
}



// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input')
    // const  newDepositAmountText = depositInput.value ;
    // const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const newDepositAmount = getInputValue('deposit-input');

// const depositTotal = document.getElementById('deposit-total');
// const previousDepositText = depositTotal.innerText;
// const previousDepositAmount = parseFloat(previousDepositText);
// const newDepositTotal = previousDepositAmount + newDepositAmount;

// depositTotal.innerText = newDepositTotal;
updateTotalField('deposit-total', newDepositAmount);

// update account balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText  = balanceTotal.innerText;
const previousBalanceAmount = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceAmount + newDepositAmount;

balanceTotal.innerText = newBalanceTotal;

// //clear input field
// depositInput.value = '';

});

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText)  ;
    const newWithdrawAmount =getInputValue('withdraw-input');
    // withdrawInput.value = '';
   
// set withdraw total

// const withdrawTotal = document.getElementById('withdraw-total');
// const previousWithdrawTotal = withdrawTotal.innerText;
// const previousWithdrawAmount = parseFloat(previousWithdrawTotal);
// const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount
// withdrawTotal.innerText = newWithdrawTotal;
updateTotalField('withdraw-total', newWithdrawAmount);
//update withdraw in balance

const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceAmount = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

balanceTotal.innerText = newBalanceTotal;



});









 

