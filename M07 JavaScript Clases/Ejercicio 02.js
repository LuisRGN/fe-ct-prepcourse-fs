/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
}
class Persona {
   constructor(nombre, apellido, edad, domicilio){
     this.nombre=nombre
     this.apelido=apellido
     this.edad=edad
     this.domicilio=domicilio
   }
   detalle(){
     return(this)
   }
 }
 
 var nuevaPersona = new Persona('Luis', 'Gonzalez', 25, 'Lima')
 nuevaPersona.detalle()

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
}
function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   class Persona {
     constructor(nombre, apellido, edad, domicilio){
       this.nombre = nombre
       this.apelido = apellido
       this.edad = edad
       this.domicilio = domicilio
     }
     detalle(){
       return(this)
     }
   }
   var nuevaPersona = new Persona('Luis', 'Gonzalez', 25, 'Lima')
   var otraNuevaPersona = new Persona(nombre,apellido,edad,domicilio)
   nuevaPersona.detalle()
  otraNuevaPersona.detalle()
 }

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
}
function agregarMetodo() {
   class Persona {
     constructor(nombre, apellido, edad, domicilio){
       this.nombre=nombre
       this.apelido=apellido
       this.edad=edad
       this.domicilio=domicilio
     }
     detalle(){
       return(this)
     }
   }
   Persona.prototype.datos = function(){
     return(nuevaPersona.nombre + ', ' + nuevaPersona.edad + ' años.')
   }
   
   var nuevaPersona = new Persona('Luis', 'Gonzalez', 25, 'Lima')
   nuevaPersona.datos()
 }
 agregarMetodo()

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
