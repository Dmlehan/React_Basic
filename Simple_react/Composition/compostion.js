function add2(x){
    return x+2;
}

function add3(x){
    return x+3
}

function multiplyBy3(x){
    return x*3;
}

function substract1(x){
     return x-1;
}


let y=add2(5);
console.log(y);

console.log(add3(5))
y=substract1(9);
console.log(y);

y=substract1(multiplyBy3(add2(5)));
console.log(y);



function compose(){

    var functions = arguments;

    return function (input){
       var value =input;

       for(var i=0; i<=functions.length;i++){
        value=functions[i](value);
       }
       return value;
    }
}

var allInOneFunction=compose(add2,multiplyBy3,substract1);
var result=allInOneFunction(18);
console.log(result);