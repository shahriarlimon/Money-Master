

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

    // ERROR HANDLING

    document.getElementById("income-input").addEventListener('keyup',function(e){
        if (e.target.value < 0){
            document.getElementById("errfn-income").innerText = 'Please Enter Valid Number';
            document.getElementById("errfn-income").style.color = 'red';
        }
        else if ( e.target.value >= 0){
            document.getElementById("errfn-income").innerText ='';
        }

    })
    document.getElementById("food-input").addEventListener('keyup',function(e){
        if (e.target.value < 0){
            document.getElementById("errfn-food").innerText = 'Please Enter Valid Number';
            document.getElementById("errfn-food").style.color = 'red';
        }
        else if ( e.target.value >= 0){
            document.getElementById("errfn-food").innerText ='';
        }

    })
    document.getElementById("rent-input").addEventListener('keyup',function(e){
        if (e.target.value < 0){
            document.getElementById("errfn-rent").innerText = 'Please Enter Valid Number';
            document.getElementById("errfn-rent").style.color = 'red';
        }
        else if ( e.target.value >= 0){
            document.getElementById("errfn-rent").innerText ='';
        }

    })
    document.getElementById("cloth-input").addEventListener('keyup',function(e){
        if (e.target.value < 0){
            document.getElementById("errfn-cloth").innerText = 'Please Enter Valid Number';
            document.getElementById("errfn-cloth").style.color = 'red';
        }
        else if ( e.target.value >= 0){
            document.getElementById("errfn-cloth").innerText ='';
        }

    })



    