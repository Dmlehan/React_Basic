function randomNumberAdd(a,b){
    let time = Date.now();
    return a+b+" LA"+"  "+time;
}
console.log(randomNumberAdd(10,15));

for( let i=0; i<20; i++){
   console.log(randomNumberAdd(10,15));
}