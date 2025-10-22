class Rectangle{
    constructor(_width,_height,_color){
        // this.width=_
      console.log('A new Rectangle Created');
    }
    getArea(){
        return this.width*this.height;
    }

    aboutMe(){
        return `I am a Rectangle and my width is ${this.width}.
        my height is ${this.height}.
        I'm ${this.color}color.`;
    
    }
}
const newRectangle=new Rectangle(10,8,'red');
console.log(newRectangle.getArea());
console.log(newRectangle.aboutMe());

const newRectangle2=new Rectangle(15,10,'Yellow');
console.log(newRectangle2.getArea());
console.log(newRectangle2.aboutMe());