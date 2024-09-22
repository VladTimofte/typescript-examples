class Car {
    constructor(marcaParam, modelParam) {
        this.marca = marcaParam;
        this.model = modelParam;
    }
    afiseazaDetalii() {
        console.log(`Masina: ${this.marca} ${this.model}`);
    }
}
const masina1 = new Car('Dacia', 'Logan');
const masina2 = new Car('Tesla', 'Model 3');
masina1.afiseazaDetalii();
masina2.afiseazaDetalii();
