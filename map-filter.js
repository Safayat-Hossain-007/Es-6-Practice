const numbers = [1,2,3,4,5,6,7];
const output=[];

// for(let i=0;i<numbers.length;i++){
//     const element = numbers[i];
//     result = element*element;
//     output.push(result);

// }
// console.log(output);


// function square(element){
//     return element * element;
    
// }

// const square = element => element * element;

// const square = x => x *x;


// const result = numbers.map(function(element){
//     return element*element;
// });

//arrow and mapping in js 
const result1 = numbers.map(x => x * x);
console.log(result1);

//filter is used to select a specific things from the array, filter is the siblings of map,filter always returns an array
const bigger = numbers.filter(x => x>5);
console.log(bigger);

//find if the condition fulfils the certain conditions then it return back that element
const isThere = numbers.find(x => x>5)
console.log(isThere);