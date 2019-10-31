let val;

//number to String
val =String(555);
val =String(5 + 5);
//bool to string
val = String(true);

//date to string
val = String(new Date());

//array to string
val = String([1,2,3,4,5]);

//toString
val = (5).toString();


//String to Number
val = Number('5');
val = Number("hello");
val = Number([1,2,3]);

val = parseInt('100');

//output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed());