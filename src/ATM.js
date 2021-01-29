
class ATM {
    constructor(amount = 0) {
        this.amount = amount;
    }
    getCurrentBalance(){
        return this.amount;
    }
    withdraw(amountToWithdraw){

     this.amount = this.amount - amountToWithdraw;
     //check if you've overdrafted
     return this.amount > 0 ? amountToWithdraw : null;
    }
    deposit(amountTodeposit){

       return this.amount =  amountTodeposit + this.amount;
      
       
       }
}
module.exports = ATM;