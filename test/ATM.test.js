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
// Balance -- returns a number -- same test as the last one getCurrentBalance :)
// Apply interest rate to the balance interest rate -- returns a number
// withdraw -- returns a number  balance - interest
// withdraw -- do I have enough balance to make a withdraw returns true or false
// deposit -- returns a number -- return deposit + balance
// applyInterest() -- returns a number -- withdraws and deposits affect interest
// getCurrentBalance() -- returns a balance number

var expect = require('chai').expect; 
const ATM  = require('../src/ATM');


describe('ATM', function () {
    it('should return a number', function (){
        let myAccount = new ATM(100.00);
        expect(myAccount.getCurrentBalance()).to.equal(100.00);
    })
    it("should return a number, the rate of interest", function() {
        let myAccount = new ATM(100.00);
        expect(myAccount.interestRate()).to.equal(10);
    })
    it("should pass a number and return a boolean enough balance to withdraw", function () {
        let myAccount = new ATM(100.00);
        expect(myAccount.withdraw(25.00)).to.be.true; 
    })
    it("should pass a number and return a boolean not enough balance to withdraw", function () {
        let myAccount = new ATM(100.00);
        expect(myAccount.withdraw(125.00)).to.be.false; 
    })
    it("returns a number -- return deposit + balance", function () {
        let myAccount = new ATM(100.00);
        expect(myAccount.deposit(50.00)).to.equal(150.00);   
    })
    it("returns a number -- balance + interest", function () {
        let myAccount = new ATM(100.00);
        expect(myAccount.applyInterest()).to.equal(110.00);   
    })

})//describe

 