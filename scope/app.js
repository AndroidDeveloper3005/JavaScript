//global scope
var a =1;
let b= 2;
const c =3;

/*function test(){
    var a =10;
    let b= 20;
    const c =30;
    console.log('Function SCOPE : ', a,b,c);

}
test();*/

if(true){
    //block scope
    var a =10;
    let b= 20;
    const c =30;
    console.log('If Block SCOPE : ', a,b,c);
}

console.log('GLOBALE SCOPE : ', a,b,c);