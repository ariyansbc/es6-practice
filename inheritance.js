class Parent {
    constructor() {
        this.fatherName = "Mahfuzur rahman";
        this.motherName = "Jamila begum";
    }
}

class Child extends Parent {
    
    constructor(name) {
        super();
        this.name = name
    }
    getFullName() {
        return this.fatherName + " " + this.name
    }
}
const baby = new Child("ahmed");
const baby2 = new Child("rafat");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());