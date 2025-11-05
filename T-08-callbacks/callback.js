function func1(callback){
    setTimeout(()=>{
    console.log('File opened...');
    callback();
    } , 1000);   
}

function func2(callback){
    setTimeout(()=>{
    console.log('File opened...');
    callback();
    } , 1000);   
}

function func3(callback){
    setTimeout(()=>{
    console.log('File opened...');
    callback();
    } , 1000);   
}

function func4(callback){
    setTimeout(()=>{
    console.log('File opened...');
    callback();
    } , 1000);   
}

function func5(callback){
    setTimeout(()=>{
    console.log('File opened...');
    callback();
    } , 1000);   
}

function func6(callback){
    setTimeout(()=>{
    console.log('File opened...');
    callback();
    } , 1000);   
}

func1(()=>{
   console.log('This is the function again');
   func2(()=>{
      func3(()=>{
     console.log('This is the function again2');
       });
     console.log('This is the function again2');
   });
});

