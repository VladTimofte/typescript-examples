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