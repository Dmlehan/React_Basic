function takeShower(){
  return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const shower=true;
                console.log('you take a shower')
                resolve('You take shower');
         },3000);
  });
}

function doHomework(){
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      console.log('You do your homework');
      resolve('you completed your homework');
     },2000);
  });
}
function play(){
       return new Promise((resolve,reject)=>{
          setTimeout(()=>{
             console.log('you play what you like');
             resolve('you played what you like');
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