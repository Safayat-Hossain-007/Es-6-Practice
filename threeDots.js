const ages = [12,15,16,12,33];
const ages2 = [15,16,12];
const ages3 = [22,44,66,22,33];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];
// console.log(allAges);
// console.log(allAges2);
const a = 650;
const b = 450;
const c = 550;
const takaPoisa = [690,450,550];
const max1 = Math.max(...takaPoisa);
console.log(max1);
const max = Math.max(a,b,c);
console.log(max);