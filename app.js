// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input')
    const  newDepositAmountText = depositInput.value ;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total

const depositTotal = document.getElementById('deposit-total');
const previousDepositText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousDepositText);
const newDepositTotal = previousDepositAmount + newDepositAmount;

depositTotal.innerText = newDepositTotal;

// update account balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText  = balanceTotal.innerText;
const previousBalanceAmount = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceAmount + newDepositAmount;

balanceTotal.innerText = newBalanceTotal;

//clear input field
depositInput.value = '';

});

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)  ;
    console.log(newWithdrawAmount);

    withdrawInput.value = '';
   
// set withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawTotal = withdrawTotal.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawTotal);
const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount

withdrawTotal.innerText = newWithdrawTotal;

//update withdraw in balance

const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceAmount = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

balanceTotal.innerText = newBalanceTotal;



});









 

