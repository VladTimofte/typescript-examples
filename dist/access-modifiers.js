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
