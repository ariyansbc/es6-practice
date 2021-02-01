// function doubleIt(num) {
//     return num *2;
// }

//  const doubleIt = function myFunc(num) {
//      return num * 2;
//  }

const doubleIt = num => num *2;
const add = (x,y) => x+y;
const giveName = () => "Shahriar Jalal";

const calculate = (x,y) => {
    const add = x+y;
    console.log('add result:', add);

    const subs = x-y;
    console.log("subs result: ", subs);

    const result = add * subs;
    console.log("muliplacation of add and subs: ", result);
}

const result = doubleIt(5);
const addResult = add(5,20);
const myName = giveName();
const  bigResult  = calculate(10,20);
console.log(result);
console.log("addResult",addResult);
console.log("myName: ", myName);
