var _var=10;
let _let=20;
const _const=30;

// console.log(_var,_let,_const);
function scopeTest(){
    var _var2=100;
    let _let=200;
    const _const2=300;
     if (true){
        console.log(_var,_let,_const);
        
     }
}