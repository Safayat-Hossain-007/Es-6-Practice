class Parent{
    constructor(){
        this.fatherName ="Jake lockely"
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}


const baby = new Child("Arnold");
const baby2 = new Child("Tom hank");
console.log(baby2);
console.log(baby.getFullName());