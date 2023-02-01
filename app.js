class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(number) {
        if (typeof number === 'number') {
            this._numberOfStudents = number;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length))]
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy() {
        return this._pickUpPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high school', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

// Testing
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13.")

lorraineHansbury.quickFacts();
console.log(lorraineHansbury.pickUpPolicy);
const substitute = PrimarySchool.pickSubstituteTeacher(
    ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(substitute);

const alSmith = new HighSchool('Al E. Smith', 415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
console.log(alSmith.name);
console.log(alSmith.level);
alSmith.numberOfStudents = 417;
console.log(alSmith.numberOfStudents);
