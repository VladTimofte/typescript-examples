class PersoanaPublic {
    public name: string;

    constructor(numeParam: string) {
        this.name = numeParam
    }

    public salut(): void {
        console.log(`Salut, numele meu este ${this.name}`)
    }
}

let persoanaPublic = new PersoanaPublic('Vlad')
console.log(persoanaPublic.name)
persoanaPublic.salut()


class PersoanaPrivata {
    private varsta: number;

    constructor(varstaArg: number) {
        this.varsta = varstaArg
    }

    public afiseazaVarsta(): void {
        console.log(`Am, ${this.varsta} ani`)
    }
}

let persoanaPrivate = new PersoanaPrivata(30)
// console.log(persoanaPrivate.varsta) Nu este posibil accesarea unei variabile private din exteriorul clasei

class Animal {
    protected sunet: string

    constructor(sunetArg: string) {
        this.sunet = sunetArg
    }

    public scoateSunet(): void {
        console.log(`Animalul face: ${this.sunet}`)
    }
}

class Caine extends Animal {
    public scoateSunet(): void {
        console.log(`Cainele face: ${this.sunet}`)
    }
}

let caine = new Caine("Ham-ham")
let animal = new Animal('Default sunet')
// Property 'sunet' is protected and only accessible within class 'Animal' and its subclasses.
// console.log(caine.sunet)
caine.scoateSunet();
animal.scoateSunet();


// READONLY
class MyReadOnlyClass {
    readonly myReadOnlyProperty: number;

    constructor(value: number) {
        this.myReadOnlyProperty = value
    }
}

const instance = new MyReadOnlyClass(10)
console.log('Read only instance value: ', instance.myReadOnlyProperty)
// instance.myReadOnlyProperty = 20


// STATIC
class Calculator {
    static pi = 3.14

    // Metoda statica
    static calculateArea(radius: number): number {
        return this.pi * radius * radius;
    }

    // Metoda NON-statica
    calcuateCircumference(radius: number): number {
        return 2* Calculator.pi * radius // Accesam proprietatea statica
    }
}

console.log(Calculator.pi)
console.log(Calculator.calculateArea(5))

const calculator = new Calculator()
console.log(calculator.calcuateCircumference(5))



class Angajat {
    private salariu: number

    constructor(private nume: string, private pozitie: string, salariu: number) {
        this.salariu = salariu
    }

    public detaliiAngajat(): string {
        return `Angajat: ${this.nume}, Pozitie: ${this.pozitie}, Salariu: ${this.salariu}`
    }

    protected calculeazaBonus(): number {
        return this.salariu * 0.3
    }
}

class Manager extends Angajat {
    constructor(nume: string, pozitie: string, salariu: number) {
      super(nume, pozitie, salariu);
    }
  
    // Metodă publică care accesează membru protejat din clasa părinte
    public afiseazaDetaliiManager(): string {
      return `${this.detaliiAngajat()} - Bonus: ${this.calculeazaBonus()}`;
    }
  }

  const angajat = new Angajat('Vlad', 'Dev', 1000)