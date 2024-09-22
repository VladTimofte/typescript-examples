class Car {
    public marca: string;
    public model: string;

    constructor(marcaParam: string, modelParam: string) {
        this.marca = marcaParam
        this.model = modelParam
    }

    afiseazaDetalii(): void {
        console.log(`Masina: ${this.marca} ${this.model}`)
    }
}

const masina1 = new Car('Dacia', 'Logan')
const masina2 = new Car('Tesla', 'Model 3')

masina1.afiseazaDetalii()
masina2.afiseazaDetalii()