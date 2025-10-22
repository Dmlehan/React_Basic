const arr1=[3,3,3];
const arr2=['X','Y','Z'];
console.log(arr1,arr2);

function sum(a,b,c){
console.log(a + b + c);
}
sum(...arr1);
