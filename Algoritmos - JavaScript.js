// Crear un algoritmo que muestre los números pares entre el 0 y el 100.

const pares = function(){
    for(let i = 0 ; i <= 100 ; i+=2) {
        console.log(i)
    }
}


// Dados los siguientes array's, imprimir por consola los elementos del array 
// “y” que no se encuentran en el array “x” utilizando para tal fin una única 
// línea de código.


const x = ["n", "bro", "c", "|"]; 
const y = ["d", "n", "l", "bro", "g"];
// Tu código aquí -> (...)
console.log( y.filter(el => x.includes(el)) );
