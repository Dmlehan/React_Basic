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
      if(homeWork){
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
             const play = true;
             if(play){
             resolve('you played what you like');

             }else{
             reject('you didnt play');
             }
          },1000); 
       });
}

async function doAll() {
    try{
        // finding return value  when using async and await

     const result=await takeShower();
     console.log(result);
     await doHomework();
     await play();
    }catch(error){
        console.log(error);
    }
}
doAll();