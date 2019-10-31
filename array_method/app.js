const numbers = [43,55,66,88,77,99];
const numbers2 = new Array(22,33,44,11,55);
const fruits = ['apple','banana','orange'];
const mixed =[22,'hello',true,null,{a:1,b:2},new Date()];


let val;


//get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get single value
val = numbers[3];
//array insert
numbers[2]= 110;
//find index value
val = numbers.indexOf(99);
// mutating arrays
//add on to end
numbers.push(250);
//add on front
numbers.unshift(125);
//delete from end
numbers.pop();
//delete front
numbers.shift();
//splice values (hide value)
numbers.splice(1,1);
//reverse
numbers.reverse();
//concate array
val = numbers.concat(numbers2);
//sorting
val = fruits.sort();

//use the compare function
val = numbers.sort(function(x,y){
    return x - y;
});
//reverse sort
val = numbers.sort(function(x,y){
    return y - x;
});

//find
function under_50(num){
    return num < 50;
}

val = numbers.find(under_50);


//print
console.log(mixed);
console.log(val);
//console.log(numbers);