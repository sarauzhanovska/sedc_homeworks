class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
        this.eat = function (input) {
            if (input instanceof Animal) {
                if (type === 'herbivore') {
                    console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
                }
                else if (input.size >= this.size * 2) {
                    console.log(`The animal ${this.name} tried to eat the ${input.name}, but it was too large`);
                }
                else {
                    this.isEaten = true
                    console.log(`The animal ${this.name} ate ${input.name}`);
                }
            }
            else {
                console.log(`The animal ${this.name} is eating the ${input}
                    `);
                }
        }
    }
}


let tiger = new Animal("Tiger", "carnivore", 2, 4);
let hippo = new Animal("Hippo", "herbivore", 4, 10);
let goat = new Animal("Goat", "herbivore", 1, 3);

tiger.eat(goat);
hippo.eat(tiger);
tiger.eat(hippo)
goat.eat("hay")
hippo.eat(goat)
