let Bank = (function () {
    let bankbalance = 12000;

    function checkBalance(){
        console.log(bankbalance);
    }

    function setBalance(val){
        bankbalance = val;
    }

    function withdrawBalance(val){
        if (val <= bankbalance) {
            bankbalance -= val;
            console.log(bankbalance);
        } else {
            console.log("value entered is more than bank balance.");
        }
    }

    return {
        checkBalance,
        setBalance,
        withdrawBalance,
    };

})(); 

Bank.withdrawBalance(11000);