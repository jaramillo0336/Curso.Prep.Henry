// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola, soy María José desde Mallorca";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5971;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {

  // "Return" la string provista: str
  // Tu código:

  return(str); //retorno el String pasado como argumento de la función
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:

  let sumados = x+y; //declaro variable local 'sumados' y le asigno el valor de la operación correspondiente, dados los argumentos 'x' e 'y' de la función
  return(sumados); // retornamos el resultado
  
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:

  let diferencia= x-y; //declaro variable local 'diferencia' y le asigno el valor de la operación correspondiente, dados los argumentos 'x' e 'y' de la función
  return(diferencia); // retornamos el resultado
  
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let producto= x*y; //declaro variable local 'producto' y le asigno el valor de la operación correspondiente, dados los argumentos 'x' e 'y' de la función
  return(producto); // retornamos el resultado
  
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  cociente= x/y; //declaro variable local 'cociente' y le asigno el valor de la operación correspondiente, dados los argumentos 'x' e 'y' de la función
  return(cociente); // retornamos el resultado
  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y){
  
  return(true); // retornamos el booleano 'true' si ambos argumentos son iguales
  }else{
    return(false); // si los argumentos son diferentes, retornamos el booleano 'false'
  }
  
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length === str2.length){ //utilizamos función .length para calcular la longitud de cada string, y de ser iguales retornamos el booleano 'true'
    return(true);
  }else{
    return(false); // retornamos 'false' en caso contrario, es decir, si la longitud de los String pasados como argumentos 'str1' y 'str2' no es igual
  }
  
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){ // evaluamos si el argumento 'num' es mayor de 90
    return(true); // devolvemos 'true' si la premisa se cumple
  }else{
    return(false); // de lo contrario, devolvemos 'false'
  }
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){ //evaluamos si el argument 'num' es mayor de 50
    return(true); //retornamos 'true' si la premisa se cumple
  }else{
    return(false); // en caso contrario, retornamos 'false'
  }
  
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto = x%y; // declaramos variable local 'resto' y asignamos el valor correspondiente, esto es, módulo entre 'x' e 'y'
  return(resto); // retornamos el resto
  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2 == 0){ //evaluamos si el resto de la división del argumento 'num' y 2 es cero
    return(true); // en dicho caso, retornamos 'true' - es decir, el número es par
  }else{
    return(false); // si no, retornamos 'false'
  }
  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2 !=0){ //evaluamos si el resto de la división entre el argumento 'num' y 2 es diferente de 0
    return(true); // de ser cierto, retornamos 'true' - es decir, el número es impar
  }else{
    return(false); // de lo contrario, retornamos 'false - es decir, el número es par
  }
  
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado=Math.pow(num,2); // declaro variable local 'cuadrado' y asigno el valor de la potencia 2 del argumento 'num'
  return(cuadrado); //retorno el valor calculado, es decir, el cuadrado del argumento 'num' - también se puede calcular como cuadrado=num*num
  
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let cubo=Math.pow(num,3); // declaro variable local 'cubo' y calculo la potencia 3 del argumento 'num' - es decir, el cubo de 'num
  return(cubo); //retorno el valor requerido, es decir, el cubo de 'num' 
  
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let potencia=Math.pow(num,exponent); // declaro variable local 'potencia' y utilizo función .pow del objeto Math para hacer el cálculo entre los argumentos 'num' y 'exponent'
  return(potencia); // retorno el valor requerido
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let redondeo =Math.round(num); // declaro variable local 'redondeo' y le asigno el valor redondeado del argumento 'num  al entero más próximo 
  return(redondeo); // devulevo el valor calculado
  
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let redondeoArriba= Math.ceil(num); // declaro variable local 'redondeoArriba' y le asigno el resultado de redondear el argumento 'num' al alza
  return(redondeoArriba);
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

  let numeroAzar=Math.random(); // Math.random calcula un nº al azar entre 0 y 1, no hay que indicarle nada específico
  return(numeroAzar); // retorno el valor calculado al azar
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let resultado; //declaro la variable local 'resultado' que va a almacenar el resultado de la evaluación del argumento 'numero'

  if (numero > 0){ // evalúo si el argumento 'numero' es mayor que 0

     resultado ="Es positivo"; // en tal caso, asigno a la variable 'resultado' el mensaje indicado

  } else if (numero < 0){ //evalúo si el argumento 'numero' es menor que 0

    resultado = "Es negativo"; // en tal caso, asigno a la variable 'resultado' el mensaje indicado

  } else  {

    resultado=false; // si no se cumple que el argumento es >0 ni <0, entonces éste es 0, así que asigno a la variable 'resultado' el booleano indicado false
  }
  return (resultado);
  
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let nuevoString= str + "!"; // declaro la nueva String y le asignamos el resultado de concatenar el argumento 'str' y '!'
  return(nuevoString); // retorno el resultado
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let combinacion = nombre + " " + apellido; // declaramos variable 'combinación' y le asignamos el valor del argumento 'nombre' de la función concatenado con 
  // el carácter " " más el argumento 'apellido' de la misma función
  return(combinacion); // mostramos el String resultante

  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let saludo= "Hola "+ nombre + "!"; //declaramos variable tipo String 'saludo' y le asignamos el string 'Hola ' concantenado con el argumento 'nombre' de la función
  return(saludo); //devolvemos el String 'saludo'
  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let area= alto * ancho; //declaramos la variable local 'area' y le asignamos el resultado de la operación correspondiente con los argumentos de la función 'alto' y 'ancho'
  return(area);//retornamos el área del rectángulo
  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let perimetro= ladonpm test JSI.test.js*4; //declaramos la variable local 'perimetro' y le asignamos el cálculo correspondiente dado el argumento que se pasó en la función 'lado'
  return(perimetro); //devolvemos el resultado requerido
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let area= (base * altura)/2; // declaramos la variable local 'area' y le asignamos la operación correspondiente dados los argumentos 'altura' y base' de la función
  return(area); // retornamos el área del triángulo

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let dolares= euro * 1.20; // declaramos variable local 'dolares' y operamos con el argumento 'euro' de la función; almacenamos el resultado en la variable 'dolares'
  return(dolares); //mostramos el resultado de la conversión
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
let mensaje;

if(letra.length>1 || letra!="a" && letra!="e" && letra!="i" && letra!="o" && letra!="u" && letra!="A" && letra!="E" && letra!="I" && letra!="O" && letra!="U"){

  mensaje= "Dato incorrecto"; // si la longitud de la cadena es más de 1 o no es vocal, el mensaje es de error

} else {

    mensaje= "Es vocal"; // si la longitud es 1 y es una vocal, el mensaje muestra que la variable es una vocal
  } 

    return(mensaje); //devolvemos el mensaje correspondiente

  }
  




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
