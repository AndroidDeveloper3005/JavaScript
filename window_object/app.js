//windo method object properties
//alert
//window.alert('Hello'); 


//promt for input;
// const input = prompt();
//alert(input);

//confirm
/*if(confirm('Are you sure?')){
    console.log('Yes');
}else{
    console.log('No');
}*/

let val ;

//outer hieght and weight
val = window.outerHeight;
val = window.outerWidth;

//inner hieght and weight
val = window.innerHeight;
val = window.innerWidth;

//scroll points
val = window.scrollY;
val = window.scrollX;

//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//redirect
//window.location.href = 'http://google.com';

//reload
//window.location.reload();

//history
//window.history.go(-1);

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;



console.log(val);