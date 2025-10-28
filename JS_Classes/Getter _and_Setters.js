class Square{
    constructor(_width){
        this.width=_width;
        this.height=_height
    }
     getArea(){
        console.log(this.width,this.height);
        return this.width*this.height;
    }
    get area(){
        return this.width*this.height;

    }
    set area(newArea){
        this.width=Math.sqrt(newArea);
        this.height=Math.sqrt(newArea);

    }
    
    static calcArea(a,b){
       
    }
}
const newSquare1=new Square(10);

// const newSquare=new Square(10);
// console.log(newSquare.getArea()); 

const newSquare=new Square(10);
console.log(newSquare.area);
newSquare.area=25;
console.log(newSquare.area);

newSquare.area=25;
console.log();

