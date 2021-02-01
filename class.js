class Student {

    constructor(sId,sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'shahid high school'
    }

}
 
const student1 = new Student(12, 'kamal');
const student2 =  new Student(22, 'hasan');
const student3 =  new Student(36, 'shahriar');

console.log(student1, student2);
console.log(student3);