

document.getElementById("calculate-btn").addEventListener('click',function(){
    // get the input value
    const incomeTotal = document.getElementById("income-input").value;
    const incomeAmount = parseInt(incomeTotal);
    const foodInput = document.getElementById("food-input").value;
    const foodInputAmount = parseInt(foodInput);
    const rentInput = document.getElementById("rent-input").value;
    const rentInputAmount = parseInt(rentInput);
    const clothInput = document.getElementById("cloth-input").value;
    const clothInputAmount = parseInt(clothInput);

    // calculating total expanse
    const totalExpanse = foodInputAmount + rentInputAmount + clothInputAmount;
    document.getElementById("total-expanse").innerText = totalExpanse;

    // calculating remaining balance
    const remainedBalance = incomeAmount - totalExpanse;
    document.getElementById("balance").innerText = remainedBalance;
});

document.getElementById("save-btn").addEventListener('click',function(){
    const incomeTotal = document.getElementById("income-input").value;
    const incomeAmount = parseInt(incomeTotal);
    const savedInput = document.getElementById("save-input").value;
    const savedInputNumber = parseFloat(savedInput)/100;
    // calculating saving amount
    const savedAmount = incomeAmount * savedInputNumber;
    document.getElementById("saving-amount").innerText = savedAmount;

    // calculating overall remaining balance
    const remainingBalance = incomeAmount - savedAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
})