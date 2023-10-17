/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
}
function crearGato(nombre, edad) {
   var gato = {
       nombre, 
       edad,
       meow: 'Meow!',
       mw: function(){return(this.meow)}
   };
   return(gato);
};

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
}
function nuevoUsuario(nombre, email, password) {
   var usuario = {
    nombre,
    email,
    password, 
   }; return(usuario)
}; 

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
}
function agregarPropiedad(objeto, propiedad) {
   objeto[propiedad] = null
   return(objeto);
} 
var objeto = {x:1,y:2};


function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
}
function invocarMetodo(objeto, metodo) {
   objeto[metodo] ()
   return(objeto.x);
};

var objeto = {
   x:0,
   incremetarX: function() {
       this.x++
   }
};

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
}
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   return(objetoMisterioso.misterioso*5) 
  }
  var objetoMisterioso = {misterioso: 999}
  multiplicarNumeroDesconocidoPorCinco(objetoMisterioso)

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
}
function eliminarPropiedad(objeto, propiedad) {
   delete objeto[propiedad]
   return(objeto)
 }  
 var objeto = {x:1,y:2, z:null}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
}
function tieneEmail(objetoUsuario) { 
   if (objetoUsuario.email){
     return(true)} 
     else{
     return(false)}
 }

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
}
function tienePropiedad(objeto, propiedad) {
   var sitiene = objeto.hasOwnProperty(propiedad)
   return(sitiene)
}
var objeto = {x: true}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
}
function verificarPassword(objetoUsuario, password) {
   if (objetoUsuario.password === password){return(true)}
   else{return(false)}
}
var objetoUsuario = { password: 'Me encanta JS!'}
var password = 'Me encanta JS!'

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
}
function actualizarPassword(objetoUsuario, nuevaPassword) {
   return(objetoUsuario.password = nuevaPassword)
} 
var objetoUsuario ={password: 'Me encanta JS!'}
var nuevaPassword = objetoUsuario.password = 'Me encanta JS mucho más!'

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
}
function agregarAmigo(objetoUsuario, nuevoAmigo) {
   objetoUsuario.amigos.push(nuevoAmigo)
   return(objetoUsuario)
}
var objetoUsuario = {amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young']}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
}
function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   for(var i=0; i < objetoMuchosUsuarios.length; i++) {
       usuarios[i].esPremiun = true;
   } return(objetoMuchosUsuarios)
} 
 var usuarios = [ 
 luis = {esPremiun: false}, 
 rafael = {esPremiun: false}, 
 diego = {esPremiun: false}
]

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
}
function sumarLikesDeUsuario(objetoUsuario) {
   var suma = 0  
   for(var i=0; i < objetoUsuario.posts.length; i++){
     suma = suma + objetoUsuario.posts[i].likes
   } return(suma)
   } 
   
   var objetoUsuario = {
     posts: [
       post={likes:10},
       post={likes:19},
       post={likes:100}
     ]}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
}
function agregarMetodoCalculoDescuento(objetoProducto) {
   objetoProducto.calcularPrecioDeProducto = function(){
      var descuento
      descuento = this.precio*this.porcentajeDeDescuento
   return(this.precio - descuento)
   }
   return(objetoProducto)
   } 
   var objetoProducto = {
     precio: 80,
     porcentajeDeDescuento: 0.1,
   }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
