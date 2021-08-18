const depositBtn = document.getElementById('deposit-button')
const withdrawBtn = document.getElementById('withdraw-button')

depositBtn.addEventListener('click', function(){
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText;
    const depositTotalNumber = parseFloat(depositTotalText); 
     
    const newDeposit = document.getElementById('deposit-input')
    const newDepositText = newDeposit.value;
    const newDepositNumber = parseFloat(newDepositText)

    depositTotal.innerText = depositTotalNumber + newDepositNumber;
    newDeposit.value = '';


    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);  
    balanceTotal.innerText = balanceTotalNumber + newDepositNumber;

})