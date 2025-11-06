function takeShower(){
  return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log('you take a shower')
            const shower=true;
            if(shower){
            resolve('You take shower');
            }else{
             reject('you didnt take shower');
            }
         },3000);
  });
}

function doHomework(){
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      console.log('You do your homework');
      const homeWork=true;
      if(true){
           resolve('you completed your homework');
      }else{
           reject('you didnt complete homework');
      }
    
     },2000);
  });
}
function play(){
       return new Promise((resolve,reject)=>{
          setTimeout(()=>{
             console.log('you play what you like');
             const play=true;
             if(play){
             resolve('you played what you like');
             }else{
             reject('you didnt play');
             }
          },1000); 
       });
}

takeShower()
.then((result)=>{
 console.log(result);
 return doHomework();
})
.then((result)=>{
 console.log(result);
  return play();
})
.then((result)=>{
   console.log(result);
  console.log('All done');
});