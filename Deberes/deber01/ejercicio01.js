/*
// funcion
var arreglo=[1,2,3,4,5,6];
console.log(arreglo);*/
var str1 = 'martin';
var str2 = 'balarezo';
var str3 = 'EPN';
var str4 = 'FIS';
var int1 = 1;
var int2 = 456;

var arregloPrueba = [str1, str2, str3, str4, int1, int2];


function validarNumeroDeStringsEnArreglo(arreglo) {

    var i = 0;
var cont = 0;
    for (i; i < arreglo.length; i++) {
        console.log(typeof arreglo[i]);
        //console.log(arreglo[i]);
        if (typeof arreglo[i] == 'string') {
        cont = cont+1;
        }
    }

    return 'el numero de Strings en el arreglo es: ' + cont;

}

console.log(validarNumeroDeStringsEnArreglo(arregloPrueba));
