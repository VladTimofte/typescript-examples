function inmultire(a: number, b: number): number {
    return a * b
}

function salut(nume: string = 'Utilizator'): string {
    return `Salut, ${nume}!`;
  }
  

  function sumaElemente(lista: number[]): number {
    let total: number = 0
    for (let i = 0; i < lista.length; i++) {
      total = total + lista[i]
      
    }
    return total
  }

console.log(`Inmultire: ${inmultire(5, 10)}`)


function getFirstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(getFirstElement(['Geia sas', 'Salut', 'Hello']))
console.log(getFirstElement([4, 8, 16]))