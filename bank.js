

const logBtn = document.getElementById("btn");
logBtn.addEventListener("click", function(){
//    email Input
    const emailinput = document.getElementById("emailInput");
    const emailIS = emailinput.value;
   
    // password Input
    const passInput = document.getElementById("passInput");
    const passIs = passInput.value;
    if(emailIS == 'sontan@baap.com' && passIs == 'secret'){
        window.location.href = 'baaperbank.html'
    }
})


// Banking Deposit & Withdraw

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener("click", function(){
    console.log("Deposit")
})