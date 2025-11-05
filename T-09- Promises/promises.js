function takeShower(){
  return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const shower=true;
            if(shower){
                console.log('you take a shower')
                resolve
            }
         },3000);
  });
}
function doHomework(){

}
function play(){

}