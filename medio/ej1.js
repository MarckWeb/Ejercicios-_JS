/*1-. Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].*/

function largestOfFour(arr) {
   if (!arr) return console.info('ingresa un array de arrays')
   let resultadoArray = []
   arr.forEach((element) => {
      console.log(element)
      let maximoElemento = element.reduce((valorInicial, elementoActual) => {
         return Math.max(valorInicial, elementoActual)
      })
      resultadoArray.push(maximoElemento)
   });

   arr = resultadoArray
   return arr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
