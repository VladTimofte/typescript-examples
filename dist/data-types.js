const isActive = true;
console.log(`Boolean: ${isActive}`);
const age = 30;
console.log(`Number: ${age}`);
const bigNumber = 29834729384923842n;
console.log(`BigInt: ${bigNumber}`);
const userName = 'John Doe';
console.log(`String: ${userName}`);
const notDefined = undefined;
console.log(`Undefined: ${notDefined}`);
const empty = null;
console.log(`Null: ${empty}`);
let randomValue = 'Hello';
randomValue = 123;
console.log(`Any: ${randomValue}`);
let unknownValue;
unknownValue = true;
console.log(`Unknown: ${unknownValue}`);
const numbers = [1, 2, 3];
console.log(`Array: ${numbers}`);
const person = ['John', 30];
console.log(`Tuple: ${person}`);
var Directie;
(function (Directie) {
    Directie["Sus"] = "SUS";
    Directie["Jos"] = "JOS";
})(Directie || (Directie = {}));
let directie = Directie.Sus;
console.log(`Directie: ${directie}`);
const idSymbol = Symbol('age');
let user = {
    name: 'John',
    [idSymbol]: 35
};
console.log(`Symbol: ${user[idSymbol]}`);
function throwError(message) {
    throw new Error(message);
}
// throwError('Aceasta este o Eroare!')
const unObiect = {};
console.log(`Obiect: ${unObiect}`);
