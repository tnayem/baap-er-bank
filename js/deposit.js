function addMoney(currentBalance, newBalance) {
    return currentBalance + newBalance;
}
function decressMoney(currentBalance, decressBalance) {
    if (currentBalance > decressBalance) {
        return currentBalance - decressBalance;
    } else {
        alert("You do not have Sufficient Ballance")
    }

}
const totalBalanceString = document.getElementById('total-balance')
const currentBalance = Number(totalBalanceString.innerText);
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Deposite Section
    const depositAmount = document.getElementById('deposit-amount')
    const depositValue = Number(depositAmount.value)

    const depositTotal = document.getElementById('deposit-total')
    const depositTotalValu = Number(depositTotal.innerText)
    const totalDeposit = addMoney(depositTotalValu, depositValue)
    depositTotal.innerText = totalDeposit;
    // Total Balance Section

    const totalBalance = addMoney(currentBalance, depositValue)
    totalBalanceString.innerText = totalBalance;
    depositAmount.value = '';

})
// Withdraw Section
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = document.getElementById('total-withdraw')
    const totalWithdrawAmount = Number(withdraw.innerText);

    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawAmountValu = Number(withdrawAmount.value);
    const totalWithdraw = addMoney(totalWithdrawAmount, withdrawAmountValu)
    withdraw.innerText = totalWithdraw;
    const letBallance = decressMoney(currentBalance, totalWithdraw)
    totalBalanceString.innerText = letBallance
})
