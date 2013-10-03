//Primero declaramos una variable llamada nombre, en ella guardaremos nuestro nombre
var nombre;

//Le asigno a la variable una cadena que contiene mi nombre
nombre = "Rodrigo";

//Creamos una función llamada hola que recibe como único parámetro "yo"
//el parámetro "yo" es usado para poder desplegar: "Hola [nombre]" donde
//[nombre] es lo que recibe como parámetro.
hola = function(yo)
{
	alert("Hola " + yo);
}


//Mandamos llamar a la función pasandole como parámetro nuestra variable nombre
//la cual contiene nuestro nombre y esperamos recibir un: "Hola [nombre]"
hola(nombre);