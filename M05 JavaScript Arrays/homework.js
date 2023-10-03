/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}
function devolverPrimerElemento(array) {    
   return(array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}
function devolverUltimoElemento(array) {
   return(array[array.length-1]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}
function obtenerLargoDelArray(array) {
   return(array.length)
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}
function incrementarPorUno(array) {
   return(array.map(num => {return num + 1}))
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}
function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento)
  return(array)
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}
function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento)
   return(array)
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}
function dePalabrasAFrase(palabras) {
   var juntas = palabras.join(' ') 
   return(juntas)
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}
function arrayContiene(array, elemento) {
   return(array.includes(elemento))
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}
function agregarNumeros(arrayOfNums) {
   var suma = 0
   arrayOfNums.forEach(function(num){suma += num;})
   return(suma)   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}
function promedioResultadosTest(resultadosTest) {
   var suma = 0
   resultadosTest.forEach(function(num) {suma+=num});
   var divisor = resultadosTest.length
    return(suma / divisor)
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}
function numeroMasGrande(arrayOfNums) {
   var masGrande = Math.max(...arrayOfNums)
   return(masGrande)
 }

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}
function multiplicarArgumentos() {
   var multiplicar = 1
   if (arguments.length === 0) {
   return(0)}
 else {  for (var i=0; i<arguments.length; i++) {
   multiplicar *= arguments[i] 
}  return(multiplicar)    
} 
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}
function cuentoElementos(array) {
   var counter = 0
   for (var i=0; i<array.length; i++) {
      if (array[i]>18){
       counter++
      } 
  }
  return(counter)
 }

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}
function diaDeLaSemana(numeroDeDia) {
   switch (numeroDeDia){
       case 1:
           return('Es fin de semana')
           break;
       case 2:
           return('Es dia laboral') 
           break;
       case 3:
           return('Es dia laboral')
           break;
       case 4:
           return('Es dia laboral')
           break;
       case 5:
           return('Es dia laboral')
           break;
       case 6:
           return('Es dia laboral')
           break;
       case 7:
           return('Es fin de semana')        
   } 
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}
function empiezaConNueve(num) {
   return(String(num).startsWith('9'))
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}
function todosIguales(array) {
   var igual = array.every(i => i === array[0])  
   return(igual)
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}
function mesesDelAño(array) {
   var arrayMeses = [];
    for (var i=0; i<array.length; i++) {
       if(array[i] === 'Marzo' || array[i] === 'Noviembre' || array[i] === 'Enero'){
         arrayMeses.push(array[i]);   
       }      
    } 
    if (arrayMeses.includes('Marzo')&&arrayMeses.includes('Noviembre')&&arrayMeses.includes('Enero')&&arrayMeses.length === 3) {
    return(arrayMeses)
   } else { return('No se encontraron los meses pedidos')}    
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}
function tablaDelSeis() {
   var seis = []
   for (var i=0; i<11; i++) {
    seis.push(6*i)
   }
   return(seis)
 }

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}
function mayorACien(array) {
   var integers =[]
    for (var i=0; i<array.length; i++) {
     if (array[i] > 100) {
        integers.push(array[i]) 
} } return(integers) 
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}
function breakStatement(num) {
   var array = []
   var suma = num 
   for (var i=0; i<10; i++){
       suma = suma +  2
       if (suma === i) break;
       else {
           array.push(suma)
       }
   }
   if (i<10) {
       return ('Se interrumpio la ejecucion')
   } else {return(array)}
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}
function continueStatement(num) {
   var array = [];
   var suma = num;
   for (var i = 0; i < 10 ; i++){
   if ( i === 5 ){
   continue;
   } else {
   suma = suma + 2;
   array.push(suma);
   } }
   return(array);
   }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
