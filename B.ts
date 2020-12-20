class Car{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    disp():void{
        console.log("Name :"+this.name)
    }
}
var obj = new Car("kishore");
console.log(obj.name)
obj.disp();