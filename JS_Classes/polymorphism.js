class Animal {
    constructor(){
        console.log("An Animal is Created.");
    }
    markeSound(){
        console.log('Animals Generaly make sounds');
    }
}

  class Dog extends Animal{
    constructor(){
        super();
       console.log('A Dog is Created');
    }
    makeSound(){
        console.log('Animal Normaly Bark.');
    }
}

class Cat extends Animal{
    constructor(){
        super();
        console.log('A Cat is created;');
    }
    makeSound(){
        console.log('Cats... Meow meow');
    }
}

const someAnimal= new Animal();
someAnimal.markeSound();

const tommy = new Dog ();
tommy.markeSound();

const lassy=new Cat;
lassy.makeSound();

