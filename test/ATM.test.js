const expect = require("chai").expect;
const ATM = require("../src/ATM");
describe('ATM', () => {
    it('should have some kind of balance', () => {
        const myATM = new ATM();
        expect(myATM.getCurrentBalance()).to.equal(0);
    } );
    it('should accept a different beginning balance', () => {
        const myATM = new ATM(2000);
        expect(myATM.getCurrentBalance()).to.equal(2000);
    } );
    it('should allow withdrawals', () => {
        const myATM = new ATM(3000);
        const withdrawlAmount = myATM.withdraw(2000);
        expect(withdrawlAmount).to.equal(2000);
        expect(myATM.getCurrentBalance()).to.equal(1000);
    } );
    it('should allow deposit', () => {
        const myATM = new ATM(3000);
        const depositAmount = myATM.deposit(2000);
        expect(depositAmount).to.equal(2000);
        expect(myATM.getCurrentBalance()).to.equal(5000);
    } );
}); 