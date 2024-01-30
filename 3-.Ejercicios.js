//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado. ejemplo  mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayConNumerosCuadrados = (array) => {
   if (!array) return 'El argumento debe ser un array no vacío'
   const newArray = array.map(num =>
      isNaN(num)
         ? console.log('introdusca un array tipo number')
         : num * num)
   console.log(newArray)
}

// arrayConNumerosCuadrados([1, 4, 5, 8])
// arrayConNumerosCuadrados(['hola', 4, 5, 8])


// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, Ejemplo miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinYMax = (array) => {
   if (!Array.isArray(array) || array.length === 0) {
      return "El argumento debe ser un array no vacío.";
   }

   let result = [array[0], array[0]];

   for (let i = 1; i < array.length; i++) {
      if (array[i] > result[0]) {
         result[0] = array[i]; // Actualizar el número más alto
      } else if (array[i] < result[1]) {
         result[1] = array[i]; // Actualizar el número más bajo
      }
   }
   return result
}

//console.log(arrayMinYMax([1, 4, 5, 99, -60]))

//arrayMinYMax([1, 4, 5, 99, -60])


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const devolverArrayParImpar = (array) => {
   let objetoDeArrays = { pares: [], impares: [] }
   for (i = 0; i < array.length; i++) {
      if (i % 2 !== 0) {
         objetoDeArrays.pares.push(array[i])
      } else {
         objetoDeArrays.impares.push(array[i])
      }

   }
   return objetoDeArrays
}

console.log(devolverArrayParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
devolverArrayParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])