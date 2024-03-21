const students = [
    {id:22,name:"safayat"},
    {id:32,name:"Jake"},
    {id:42,name:"Arthur"},
    {id:52,name:"konshu"}
];

// const nam =[];
// for(let i=0;i<students.length;i++){
//     const elements = students[i];
//     nam.push(elements.name);

// }
// console.log(nam);

// const aid = [];
// for(let i=0;i<students.length;i++){
//     const elements = students[i];
//     aid.push(elements.id);
// }
// console.log(aid);

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id>30);
const biggerOne = students.find(s => s.id>30);
console.log(bigger);
console.log(biggerOne);