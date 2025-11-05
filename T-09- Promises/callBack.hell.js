
function openFile(callback){
setTimeout(()=>{
    console.log('File Opened...');
    callback();
},3000);
}

function addSomething(){
    console.log('Something Added to the File...');
}

function removeSomwthing (){
    console.log('Something Removed from the File...');
}
openFile(removeSomwthing);
addSomething(addSomething);
