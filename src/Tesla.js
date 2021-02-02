

//How many more miles can I drive before I need battery charge
//Battery charge percentage

class Tesla {
    constructor(charge, miles) {
        this.tesla;
        this.batteryCharge = charge;
        this.howManyMiles = miles;
    }
    batteryCharged() {
        console.log(this.batteryCharge);
        return this.batteryCharge;
    }
    validateBatteryCharge() {
        if(this.batteryCharge >= 0 && this.batteryCharge <= 100){
          return true;
        } else return false;
    }
    milesToGo() {
        return this.howManyMiles;
    }
    validateMilesToGo() {
        if(this.howManyMiles >= 0 && this.howManyMiles <= 400){
            return true;
        } else return false;
    }

}
module.exports = Tesla;