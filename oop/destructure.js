const person ={
    name:'jake sparrow',
    age:17,
    job:'swe',
    location:'dhanmondi',
    phone:"01772633192",
    friends:['tom hanks','tom cruise','tomas shelby'],
    gfName:'Emma Watson'
}


//const gfName = person.gfName;
 const {phone,gfName} = person;
// const phone = person.phone;

console.log(gfName,phone);


const friends = ['Safayat','Mike tyson','Jake paul','Elon Musk','joe rogan'];
const [firstFriend,secondFriend,...restOfTheFriend] = friends;
console.log(restOfTheFriend);

const complexObject={
    name:'abc',
    info:{
        address: 'kolaBegan',
        leader: 'Tiger leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);