const isActive: boolean = true
console.log(`Boolean: ${isActive}`)

const age: number = 30
console.log(`Number: ${age}`)

const bigNumber: bigint = 29834729384923842n
console.log(`BigInt: ${bigNumber}`)

const userName: string = 'John Doe'
console.log(`String: ${userName}`)

const notDefined: undefined = undefined
console.log(`Undefined: ${notDefined}`)

const empty: null = null
console.log(`Null: ${empty}`)

let randomValue: any = 'Hello'
randomValue = 123
console.log(`Any: ${randomValue}`)

let unknownValue: unknown
unknownValue = true
console.log(`Unknown: ${unknownValue}`)

const numbers: number[] = [1,2,3]
console.log(`Array: ${numbers}`)

const person: [string, number] = ['John', 30]
console.log(`Tuple: ${person}`)

enum Directie {
    Sus = "SUS",
    Jos = "JOS"
}
let directie = Directie.Sus
console.log(`Directie: ${directie}`)

const idSymbol = Symbol('age')
let user = {
    name: 'John',
    [idSymbol]: 35
}
console.log(`Symbol: ${user[idSymbol]}`)

function throwError(message: string): never {
    throw new Error(message)
}

// throwError('Aceasta este o Eroare!')