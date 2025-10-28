class person{
    constructor(_name,_age){
         this.name=_name;
         this.age=_age;
         console.log('A new person is Created');
    }
}
class programmer extends person{
  constructor(_name,_age_language){
    super(_name,_age);
      this.name=_name;
      this.age=_age;
      this.language=_language;
  }
  code(){
    return '${this.name} is programmer & knows ${this._language}';
  }
}


const join=new person('john','32');
const join2=new person('smith','25');
const jane1=new programmer('Jane','28','JavaScript');
console.log(jane1.code());
