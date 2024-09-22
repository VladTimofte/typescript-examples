//Interfete

interface User {
    id: number,
    name: string,
    email: string,
    functie: string
    age?: number,
}

//Utilizam interfata
const utilizator: User = {
    id: 2394823948923,
    name: 'John',
    email: 'john@example.com',
    functie: 'Developer'
}

console.log(utilizator.name)


