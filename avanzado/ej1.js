//1-. Cree una función que tome dos o más matrices y devuelva una matriz de su diferencia simétrica. La matriz devuelta debe contener solo valores únicos ( sin duplicados ).

//sym([1, 2, 3], [5, 2, 1, 4])debería regresar [3, 4, 5].

function sym(...args) {
   // Función para obtener la diferencia simétrica de dos arrays
   function symmetricDifference(arr1, arr2) {
      return arr1

         //filtramos buscando dentro de array 2 elemntos iguales
         .filter(element => arr2.indexOf(element) === -1)
         .concat(arr2.filter(element => arr1.indexOf(element) === -1))
         .filter((element, index, array) => array.indexOf(element) === index);
   }

   // Aplica la diferencia simétrica a todas las matrices
   const result = args.reduce((acc, current) => symmetricDifference(acc, current), []);

   return result;
}


console.log(sym([1, 2, 3], [5, 2, 1, 4]))