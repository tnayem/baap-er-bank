function addMoney(currentBalance, newBalance){
    return currentBalance + newBalance;
}
document.getElementById('deposit-btn').addEventListener('click',function(){
    // Deposite Section
    const depositAmount = document.getElementById('deposit-amount')
    const depositValue = Number(depositAmount.value)

    const depositTotal = document.getElementById('deposit-total')
    const depositTotalValu = Number(depositTotal.innerText)
    const totalDeposit = addMoney(depositTotalValu, depositValue)
    depositTotal.innerText = totalDeposit;
    // Total Balance Section
    const totalBalanceString = document.getElementById('total-balance')
    const currentBalance = Number(totalBalanceString.innerText);
    const totalBalance = addMoney(currentBalance , depositValue)
    totalBalanceString.innerText = totalBalance;
    depositAmount.value = '';
    
})