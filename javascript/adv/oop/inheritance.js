class Character {
    #health = 100;

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return this.name + ' attack with ' + this.weapon;
    }

    set setHealth(value = 100) {
        if (value < 0) throw new Exception("Negative health");
        this.#health = value;
    }

    get getHealth() {
        return this.#health;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'Stronges fort in the world made!'
    }
}

// Ogre.prototype.makeFort = () => 'Stronges fort in the world made!';

const dolby = new Elf('Carlos', 'Fire', 'house');
const shrek = new Ogre('Shrek', 'club', 'green');
console.log(dolby);
console.log(dolby.attack());

console.log(shrek);
console.log(shrek.attack());
console.log(shrek.makeFort());

console.log('Ogre.prototype.isPrototypeOf:', Ogre.prototype.isPrototypeOf(shrek));
console.log('Character.prototype.isPrototypeOf:', Character.prototype.isPrototypeOf(Ogre.prototype));

console.log('dolby instanceof Elf', dolby instanceof Elf);
console.log('shrek instanceof Ogre', shrek instanceof Ogre);

console.log('dolby instanceof Character', dolby instanceof Character);
console.log('shrek instanceof Character', shrek instanceof Character);


// dolby.#health = 10;
// Output: SyntaxError: Private field '#health' must be declared in an enclosing class

dolby.setHealth = 100;
console.log('dolby health', dolby.getHealth);
