//------------------------------
// Factory functions
//------------------------------
console.log("--------------------------");
const elfFunctions = {
    attack() {
        return this.name + ' attack with ' + this.weapon;
    }
}
function createElf(name, weapon) {
    // This is a prototypal inherence
    const newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.weapon = weapon;

    return newElf;
}

const carlos = createElf('Carlos', 'fire');
const aguilera = createElf('Aguilera', 'stones');

console.log(carlos.attack());
console.log(aguilera.attack());


//------------------------------
// Constructor functions
//------------------------------
console.log("--------------------------");
const Elfunc = Function('name', 'weapon', `
    this.name = name;
    this.weapon = weapon;
`);

const elf1 = new Elfunc('Carlos', 'Fire')
console.log(elf1.name, elf1.weapon);

function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () {
    return this.name + ' attack with ' + this.weapon;
}

// All the objects points to the same attack location in memory
const elf2 = new Elf('Carlos', 'Stones');
console.log(elf2.name, elf2.weapon);
console.log(elf2.attack());

// The prototype
console.log(Elf.prototype, elf2.__proto__);

//------------------------------
// Classes
//------------------------------
console.log("--------------------------");
class ElfClass {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return this.name + ' attack with ' + this.weapon;
    }
}

const elf3 = new ElfClass('Carlos', 'Stones');
console.log(elf3.name, elf3.weapon);
console.log(elf3.attack());
