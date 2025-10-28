class square{
constructor(_width,_height){
    this.width=_width;
    this.height=_height;
}
getArea(){
    return this.width*this.height;
}
static calArea(a,b){
   return a*b;
}
}
const square1=new square(4,5)
console.log(square1.getArea());
console.log(square.calArea(5,6));



