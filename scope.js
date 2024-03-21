let bonus = 20;
function sum(first,second){
    let result = first+second+bonus;
    if(result>9){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}

const output = sum(3,7);
// console.log(output);
// console.log(bonus);

//hosting var dara kono declare korle seta tar scope resolution theke ber hoye tar parent property tae chole zawakae hosting bole