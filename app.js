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









 

