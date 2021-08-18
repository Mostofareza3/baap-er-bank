const depositBtn = document.getElementById('deposit-button')
const withdrawBtn = document.getElementById('withdraw-button')

depositBtn.addEventListener('click', function(){
  changeBalance("deposit");

})

withdrawBtn.addEventListener('click', function(){
    changeBalance("withdraw")
    //ডাইনামিক ছাড়া কোড সেম্পল, দুই বাটনের জন্য দুইবার কোড লিখতে হয় 
    // const withdrawTotal = document.getElementById('withdraw-total')
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalNumber = parseFloat(withdrawTotalText);

    // const newWithdraw = document.getElementById('withdraw-input')
    // const newWithdrawText = newWithdraw.value;
    // const newWithdrawNumber = parseFloat(newWithdrawText);

    // withdrawTotal.innerText = withdrawTotalNumber + newWithdrawNumber;
    // newWithdraw.value = ''

    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalNumber = parseFloat(balanceTotalText);  

    // balanceTotal.innerText = balanceTotalNumber - newWithdrawNumber;

})


function changeBalance(type){

    const previousTotal = document.getElementById(`${type}-total`)
    const previousTotalText = previousTotal.innerText;
    const previousTotalNumber = parseFloat(previousTotalText); 
     
    const newMoney = document.getElementById(`${type}-input`)
    const newMoneyText = newMoney.value;
    // console.log(newMoneyText)
    
    if(newMoneyText.length != 0){               //NaN fixed
        const newMoneyNumber = parseFloat(newMoneyText)
        if(newMoneyNumber >0){                  // bariar for negative number
            previousTotal.innerText = previousTotalNumber + newMoneyNumber;
            newMoney.value = '';
        
            const balanceTotal = document.getElementById('balance-total')
            const balanceTotalText = balanceTotal.innerText;
            const balanceTotalNumber = parseFloat(balanceTotalText);  
        
            if (type == "withdraw"){
                balanceTotal.innerText = balanceTotalNumber - newMoneyNumber;
            }
            else{
            balanceTotal.innerText = balanceTotalNumber + newMoneyNumber;
            }
        }
        else{
            alert('invalid input')
        }
    
    }
    else{
        alert("Please enter a number")
    }
}