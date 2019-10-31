function greet(){

}

//immidiatley invokable function expewssions
/*(function(){
    console.log('IIFE run..');
})();*/
(function(name){
    console.log('Hello ..'+name);
})('Himel');