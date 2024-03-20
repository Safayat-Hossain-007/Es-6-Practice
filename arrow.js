// function doubleIt(num){
//     return num*2;
// }

//Function expression 
// const doubleIt = function myFun(num1){
//     return num1*2;
// }

//arrow function
const doubleIt = num => num*2;

const result = doubleIt(5);
console.log(result);

const add = (x,y) => x+y;
console.log(add(2,5));

const give5 = () => 5;
console.log(give5());

const bishal = (x,y) =>{
    const sum1 = x + y;
    const sub = x - y;
    const result = sum1 * sub;
    return result;

}
console.log(bishal(7,5));