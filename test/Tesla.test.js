var expect = require("chai").expect; 
const Tesla  = require("../src/tesla");

describe("Tesla", function () {
  it("should return a number", function () {
    let car = new Tesla(100, 400);
    expect(car.batteryCharged()).to.equal(100);  
})
  it("should return a boolean", function () {
      let car = new Tesla(50, 200);
      expect(car.validateBatteryCharge()).to.be.true;
  })
  it("should return a boolean", function() {
      let car = new Tesla(200, 200);
      expect(car.validateBatteryCharge()).to.be.false;
  })
  it("should return a number", function () {
      let car = new Tesla(50, 200);
      expect(car.milesToGo()).to.equal(200);
  })
  it("should return a boolean", function () {
      let car = new Tesla(50, 200);
      expect(car.validateMilesToGo()).to.be.true;
  })
  it("should return a boolean", function () {
      let car = new Tesla(50, 500);
      expect(car.validateMilesToGo()).to.be.false;
  })




})//end describe

