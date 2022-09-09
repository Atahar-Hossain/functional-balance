// handle deposit button event
document
	.getElementById(`deposit-button`)
	.addEventListener(`click`, function () {
		const depositInput = document.getElementById(`deposit-input`);
		const newDepositeAmmountText = depositInput.value;
		const newDepositeAmmount = parseFloat(newDepositeAmmountText);
		const totalDeposit = document.getElementById(`deposit-total`);
		const totalDepositAmmount = parseFloat(totalDeposit.innerText);
		const currentDepositTotal = newDepositeAmmount + totalDepositAmmount;
		totalDeposit.innerText = currentDepositTotal;
		depositInput.value = ``;
		const currentBalanceText = document.getElementById(`balance-total`);
		const currentBalanceAmmount = parseFloat(currentBalanceText.innerText);
		const totalBalance = currentBalanceAmmount + newDepositeAmmount;
		currentBalanceText.innerText = totalBalance;
		// withdraw and total balance update
	});
// handle withdraw button
document
	.getElementById(`withdraw-button`)
	.addEventListener(`click`, function () {
		const withdrawInput = document.getElementById(`withdraw-input`);
		const newWithdrawAmmountText = withdrawInput.value;
		const newWithdrawAmmount = parseFloat(newWithdrawAmmountText);

		// set withdraw total
		const previousWithdraw = document.getElementById(`withdraw-total`);
		const previousWithdrawText = previousWithdraw.innerText;
		const previousWithdrawAmmount = parseFloat(previousWithdrawText);
		const totalWithdraw = previousWithdrawAmmount + newWithdrawAmmount;
		previousWithdraw.innerText = totalWithdraw;
		withdrawInput.value = ``;
		// update balance
		const balanceTotal = document.getElementById(`balance-total`);
		const previousBalanceText = balanceTotal.innerText;
		const previousBalance = parseFloat(previousBalanceText);
		const newBalanceTotal = previousBalance - newWithdrawAmmount;

		balanceTotal.innerText = newBalanceTotal;
	});
