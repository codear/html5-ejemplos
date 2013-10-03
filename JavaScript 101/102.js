//Definimos a "suma" como una función que necesita dos valores para funcionar (a y b)
suma = function(a, b)
{
	//Solo retornamos el valor, pero antes "casteamos" los valores a números
	//Recuerden que el operador: "+" también sirve para concatenar cadenas
	return Number(a) + Number(b);
}

//Definimoa a "resta" como una función que necesita dos valores
resta = function(a, b)
{
	//De igual manera que en la suma solo regresamos el valor obtenido de la operación a -  b
	return a - b;
}

//Multiplicación y división funcionan igual que la suma y la resta, solo se le pasan dos parámetros.
multiplicacion = function(a, b)
{
	return a * b;
}

division = function(a, b)
{
	return a / b;
}


//Aquí creamos la variable "r" y la igualamos a la etiqueta del HTML(document)
//que tenga el id "resultado".
//Recuerden que querySelector usa los mismos selectores que las hojas de estilos (http://www.w3schools.com/cssref/css_selectors.asp)
var r = document.querySelector("#resultado");

//Con esta linea me permite ver exactamente que es "r" (un objeto), así como poder ver todos sus atributos y métodos
//Para ver la consola JavaScript en Chrome es con: F12 y en Firefox es con: Shift + F2
//Esto nunca se muestra al usuario, es para debuguear y/o para conocer un objeto que no conozcamos bien
console.log(r);

//Esta función calcular solo es llamada cuando se presiona el botón del HTML!
calcular = function()
{
	//Primero quiero obtener el valor de la primera caja de texto...
	//Es igual que con r pero aparte de obtener todo el objeto de la etiqueta solo obtengo su valor ("value")
	var x = document.querySelector("#primero").value;

	//Ahora quiero obtener el segundo valor de la segunda caja de texto...
	//Aquí usamos el método "getElementById" que busca dentro del documento una etiqueta que tenga el id "segundo"
	//y ademas queremos de esa etiqueta unicamente su valor, es decir, "value".
	var y = document.getElementById("segundo").value;

	//Aquí estamos igualando la variable string a una cadena que se va concatenando con los valores que retornan las funciones
	//suma, resta, multiplicación y división a cada una de las funciones le pasamos como parámetros los valores obtenidos en las
	//cajas de texto!
	var string = "Suma: " + suma(x, y) + 
		" Resta: " + resta(x, y) +
		" Multiplicacion: " + multiplicacion(x, y) +
		" Division: " + division(x, y);

	//Ahora ya que tengo todo listo, deseo agregar dicha cadena a la etiqueta h3 que definí en mi documento...
	//para ello primero necesito acceder a mi etiqueta, ya lo hicimos mediante "r"
	//y ahora del objeto "r" me interesa el método "innerHTML" para poder agregar más contenido, en este caso
	//la cadena que definimos en string...
	r.innerHTML = string;
}