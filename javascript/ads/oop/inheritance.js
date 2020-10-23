class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return this.name + ' attack with ' + this.weapon;
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

const carlos = new Elf('Carlos', 'Fire', 'house');
const ogre = new Ogre('Shrek', 'club', 'green');
console.log(carlos);
console.log(carlos.attack());

console.log(ogre);
console.log(ogre.attack());
console.log(ogre.makeFort());
