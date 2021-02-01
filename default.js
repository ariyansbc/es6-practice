function add(num1, num2=10) {

    // if(num2 == undefined) {
    //     num2 = 0;
    // }
    num2 = num2 || 5;

    return num1 + num2;
}
// const result = add(20,30);
const result = add(20);
console.log(result);