
const person = {
    name : 'Shahriar Jalal',
    age  : 25,
    fName: "shahriar",
    lName: "jalal",
    fName: "shahriar Khan",
    mName: "Tahmina Begum",
    job : "programming",
    phone: "01935889287",
    gfName: "moona"
}
const {phone, job, gfName} = person
const age = person.age;
console.log("age: ", age);
console.log("phone:",phone);
console.log("job:",job);
console.log(gfName);

//array deStructure

const friendName = ["sakib khan", "raze khan" , "arbaz khan" , "saim khan", "munir khan"];
const [chotobhai, borobhai,...bakibhai] = friendName;
console.log(chotobhai, borobhai);
console.log(bakibhai);
console.log(...bakibhai);

//complex object

const complexObject = {
    name: 'jahangir',
    age: 66,
    info : {
        address : 'kheilkhat gang billa',
        jphone : 182414,
    }
}

const {jphone} = complexObject.info;
console.log("jahangir phone:", jphone);
