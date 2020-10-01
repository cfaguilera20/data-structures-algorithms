class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    setBirthdate(date) {
        this.birthdate = date;
    }

    get birthYear() {
        return this.birthdate.getFullYear() || 0;
    }

    get birthMonth() {
        return this.birthdate.getMonth() + 1 || 0;
    }
}

const carlos = new Student("Carlos", "Aguilera");
console.log(carlos.fullName);
carlos.setBirthdate(new Date('1986-04-20'));
console.log(carlos.birthYear);
console.log(carlos.birthMonth);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b, round = 2) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy).toFixed(round);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
