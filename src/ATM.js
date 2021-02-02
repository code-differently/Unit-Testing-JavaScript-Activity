//ATM.test.js

// |ATM|
// | - |
// | balance: number |
// | interestRate: number |
// | withdraw(amount: number) |
// | deposit(amount: number) |
// | applyInterest() |
// | getCurrentBalance(): number |

//Testing Suite
// Balance -- returns a number
// Apply interest rate to the balance interest rate -- returns a number
// withdraw -- returns a number  balance - interest
// withdraw -- do I have enough balance to make a withdraw returns true or false
// deposit -- returns a number -- return deposit + balance
// applyInterest() -- returns a number -- withdraws and deposits affect interest
// getCurrentBalance() -- returns a balance number

class ATM{
    constructor(amount){
        this.amount = amount;
        console.log(this.amount);
    }   
    getCurrentBalance(){
        return this.amount;     
    }
    interestRate() {
        let currentRate = 10;
        return currentRate;
    }
    withdraw(amount){
        if (amount < this.amount){
        this.amount = this.amount - amount;
        return true;
        }
        else {
            return false;
        }      
    }
    deposit(amount) {
        this.amount = this.amount + amount;
        return this.amount;
    }
    applyInterest() {
        let rate = this.interestRate()/100;
        let rateApplied = this.amount + (this.amount * rate);
        return rateApplied;
    }

}
module.exports = ATM;