

function getInputAmount(inputId){
    const inputValue = document.getElementById(inputId).value;
    const inputAmount = parseInt(inputValue);
    return inputAmount;
}



document.getElementById("calculate-btn").addEventListener('click',function(){
    // get the input value
    const incomeAmount = getInputAmount("income-input");
    const foodInputAmount = getInputAmount("food-input")
    const rentInputAmount = getInputAmount("rent-input");
    const clothInputAmount = getInputAmount("cloth-input");

    // calculating total expanse

    const totalExpanse = foodInputAmount + rentInputAmount + clothInputAmount;
    document.getElementById("total-expanse").innerText = totalExpanse;
 
    // calculating remaining balance

    const remainedBalance = incomeAmount - totalExpanse;
    document.getElementById("balance").innerText = remainedBalance;
});

document.getElementById("save-btn").addEventListener('click',function(){
    const incomeAmount = getInputAmount("income-input");
    const savedInputAmount = getInputAmount("save-input");
    const savedInputNumber = savedInputAmount/100;
    // calculating saving amount
    const savedAmount = incomeAmount * savedInputNumber;
    document.getElementById("saving-amount").innerText = savedAmount;

    // calculating overall remaining balance after saving
    const balanceAfterExpanse = document.getElementById("balance").innerText
    const remainingBalance = balanceAfterExpanse - savedAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
})
