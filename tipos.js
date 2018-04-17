var nombre = "25";    // String
var edad = 25;  //Int

if (nombre === edad) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

var fecha = new Date();
console.log(fecha);


//Booleanos
var casado;
casado = false;
var casa = 1;
var carro = null;

console.log("comparacion con " + casa);
console.log(casa ? "Verdadero" : "false");

var sumarDosNumerosv2 = function sum2(numA, numB) {
    return numA + numB;
};

// tipo JSON

var usuario = {
    "nombre": "martin",
    "apellido": "Balarezo",
    "cedula": '1718139205',  // se recomiendo usar comillas simples ''
    imprimirEnConsola: sumarDosNumerosv2
    //function () {
    //console.log(this.nombre + ' ' + this.apellido + ' ' + this.cedula)

//    }

};
console.log("usuario", usuario);


//definir funciones
function sumarDosNumeros(numA, numB) {
    return numA + numB;
}

console.log(sumarDosNumeros(1, 2));


console.log(sumarDosNumerosv2(5, 6));


console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.cedula);
console.log(usuario.imprimirEnConsola(10, 222));

console.log(usuario.imprimirEnConsola);

/////// ARREGLOS

var array = [
    1,
    2,
    "martin",
    "balarezo",
    null,
    undefined,
    true,
    function HolaMundo() {
        return "hola mundo"
    },
    usuario.imprimirEnConsola(2, 2)
];

console.log(array);