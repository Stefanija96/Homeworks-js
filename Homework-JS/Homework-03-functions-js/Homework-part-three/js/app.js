function cashWithdraw(moneyBalance){
    while(true){
        let money = prompt(`How much do you like to get?`);
        if(money > moneyBalance){
            alert(`You cannot get ${money}$.Your balance is ${moneyBalance}$`);
        }else{
            let moneyLeft = moneyBalance - money;
            alert(`You can take your cash. Your balance now is ${moneyLeft}$`)
        }
    }
}
cashWithdraw(1550);