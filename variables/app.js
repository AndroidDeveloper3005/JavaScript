// var, let, const
var name = "Himel";
console.log(name);

//init var
var init;
console.log(init);
init = "Name";
console.log(init);

// letters , number, _, $ only this can use for create variable
//can not start with number

// multiword vars
 var fullName = "Himel";//camel case
 var full_Name = "Himel";//Underscore
 var FullName = "Himel";//pascal case
 var fullname;

 // LET

 let name_let;
 name_let = 'John';
 console.log(name_let);

 //CONST

 const name_const = "Const";//we can not change this 
 console.log(name_const);

 const person = {//object
     name:"Himel",//key : value
     age:26
 }
 person.name ='Sara'//we can change this but we can not reassaign person object
 person.age =25
 console.log(person);

 // const array
 const number = [1,2,3,4,5];
 number.push(6);//we can insert value 
 //number = [1,2,3,4,5,6];   // we can not reassaign array 
 console.log(number);




