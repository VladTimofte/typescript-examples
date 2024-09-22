function inmultire(a, b) {
    return a * b;
}
function salut(nume = 'Utilizator') {
    return `Salut, ${nume}!`;
}
function sumaElemente(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total = total + lista[i];
    }
    return total;
}
console.log(`Inmultire: ${inmultire(5, 10)}`);
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(['Geia sas', 'Salut', 'Hello']));
console.log(getFirstElement([4, 8, 16]));
