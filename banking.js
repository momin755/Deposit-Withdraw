// Banking Deposit & Withdraw

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener("click", function(){
    
    // Update Deposit Amount which in input
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmount = depositInput.value;
    

    const depositBalance = document.getElementById('deposit-Balance');

   const previousBalance = depositBalance.innerText;
   console.log(previousBalance);
   
   let depositTotal = parseFloat(previousBalance) + parseFloat(newDepositAmount);
   
   depositBalance.innerText = depositTotal;

    
    // Update Balance input add deposit value
    const addBalance = document.getElementById("new-Balance");
    const newBalance = addBalance.innerText;
    const updateBalance = parseFloat(newBalance) + parseFloat(newDepositAmount);
    
    addBalance.innerText = updateBalance;


    depositInput.value =''
})


// Withdraw System;

document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    console.log(withdrawAmount);

    // Previous Withdraw Amoun;

    const previousWithdrawInput = document.getElementById('withdraw-total');
    const previousWithdrawText = previousWithdrawInput.innerText;
    const previousWithdrawBalance = parseFloat(previousWithdrawText);
    console.log(previousWithdrawBalance);

    const withdrawTotalAmount = previousWithdrawBalance + withdrawAmount;

    previousWithdrawInput.innerText = withdrawTotalAmount;

    // Update Balance

    const newBalance = document.getElementById('new-Balance');
    const newBalanceText = newBalance.innerText;
    const newBalanceAmount = parseFloat(newBalanceText);

    const BalanceTotal = newBalanceAmount - withdrawAmount;

    newBalance.innerText = BalanceTotal;


    withdrawInput.value =''

})