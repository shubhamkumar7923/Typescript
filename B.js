var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.disp = function () {
        console.log("Name :" + this.name);
    };
    return Car;
}());
var obj = new Car("kishore");
console.log(obj.name);
obj.disp();
