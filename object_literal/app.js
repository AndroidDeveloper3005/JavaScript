const person ={
    firstName : 'himel',
    lastName:'al masud',
    age:27,
    email:'himel@gmail.com',
    address:{
        city:'Dhaka',
        state:'mirpur1'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }

};
let val ;

val =person;
//get specific value
val = person.firstName;
//val = person['firstName'];
val = person.age;
val = person.address.city;
val = person.getBirthYear();


const people = [
    {name:'john',age: 35},
    {name:'mike',age: 36}
];

for(let i =0;i<people.length;i++){
    console.log(people[i].name);

}


console.log(val);