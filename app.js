
// Defini arreglos
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio']
let newArray = []

// Funcion
function bigWords(a, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let elemento = myArray[i];
        // Comparación de longitudes
        if (a.length > elemento.length) {
        } else {
            newArray[i] = elemento;
        }
    }
    return newArray
}

console.log(bigWords("hola", myArray));