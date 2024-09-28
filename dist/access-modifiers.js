class PersoanaPublic {
    constructor(numeParam) {
        this.name = numeParam;
    }
    salut() {
        console.log(`Salut, numele meu este ${this.name}`);
    }
}
let persoanaPublic = new PersoanaPublic('Vlad');
console.log(persoanaPublic.name);
persoanaPublic.salut();
class PersoanaPrivata {
    constructor(varstaArg) {
        this.varsta = varstaArg;
    }
    afiseazaVarsta() {
        console.log(`Am, ${this.varsta} ani`);
    }
}
let persoanaPrivate = new PersoanaPrivata(30);
// console.log(persoanaPrivate.varsta) Nu este posibil accesarea unei variabile private din exteriorul clasei
class Animal {
    constructor(sunetArg) {
        this.sunet = sunetArg;
    }
    scoateSunet() {
        console.log(`Animalul face: ${this.sunet}`);
    }
}
class Caine extends Animal {
    scoateSunet() {
        console.log(`Cainele face: ${this.sunet}`);
    }
}
let caine = new Caine("Ham-ham");
let animal = new Animal('Default sunet');
// Property 'sunet' is protected and only accessible within class 'Animal' and its subclasses.
// console.log(caine.sunet)
caine.scoateSunet();
animal.scoateSunet();
// READONLY
class MyReadOnlyClass {
    constructor(value) {
        this.myReadOnlyProperty = value;
    }
}
const instance = new MyReadOnlyClass(10);
console.log('Read only instance value: ', instance.myReadOnlyProperty);
// instance.myReadOnlyProperty = 20
// STATIC
class Calculator {
    // Metoda statica
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    // Metoda NON-statica
    calcuateCircumference(radius) {
        return 2 * Calculator.pi * radius; // Accesam proprietatea statica
    }
}
Calculator.pi = 3.14;
console.log(Calculator.pi);
console.log(Calculator.calculateArea(5));
const calculator = new Calculator();
console.log(calculator.calcuateCircumference(5));
class Angajat {
    constructor(nume, pozitie, salariu) {
        this.nume = nume;
        this.pozitie = pozitie;
        this.salariu = salariu;
    }
    detaliiAngajat() {
        return `Angajat: ${this.nume}, Pozitie: ${this.pozitie}, Salariu: ${this.salariu}`;
    }
    calculeazaBonus() {
        return this.salariu * 0.3;
    }
}
class Manager extends Angajat {
    constructor(nume, pozitie, salariu) {
        super(nume, pozitie, salariu);
    }
    // Metodă publică care accesează membru protejat din clasa părinte
    afiseazaDetaliiManager() {
        return `${this.detaliiAngajat()} - Bonus: ${this.calculeazaBonus()}`;
    }
}
const angajat = new Angajat('Vlad', 'Dev', 1000);
