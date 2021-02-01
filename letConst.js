const name = 'Shahriar jalal';

// name = 'ariyan jalal';
console.log(name);

//const array
const number= [10,12,15];
//number change
console.log('before change',number);
number[1]= 20;
console.log('after change',number);
//push new value
number.push(50);
console.log('after push',number);

//const object
const players = {
    name: 'shakib al hasan',
    age: 30,
    status : 'ALL-ROUNDER'
}

// USING LET

let myName = "shahriar jalal";
console.log('Before change',myName);
myName = "ariyan jalal";
console.log('after change',myName);

let sum = 0;
for(let i = 0 ; i<=10 ; i++) {
    sum = sum + i;
}
// i is not accessible outside of scope
console.log(sum);