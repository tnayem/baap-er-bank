document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount = document.getElementById('deposit-amount')
    const depositValue = Number(depositAmount.value)

    const depositTotal = document.getElementById('deposit-total')
    const depositTotalValu = Number(depositTotal.innerText)
    const totalDeposit = depositTotalValu + depositValue;
    depositTotal.innerText = totalDeposit;
    
})