class Dog {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }
    speak() {
        console.log(`A ${this.kind} dog named ${this.name} says "Hello"`);
    }
}

const dog1 = new Dog("Amigo", "Samoyed");
console.log(dog1);

dog1.speak();

const btn = document.getElementById('btn');
function clickAndCreate(){
    const name = document.getElementById('dName').value;
    const kind = document.getElementById('dKind').value;

    const dog = new Dog(name, kind);
    console.log(dog);
    dog.speak();
    
}

btn.addEventListener('click', clickAndCreate);
