var generadores = [generador01 = 62,
    generador02 = 62,
    generador03 = 62,
    generador04 = 62,

    generador05 = 124,
    generador06 = 124,
    generador07 = 124,
    generador08 = 124,
    generador09 = 124,
    generador10 = 124,
    generador11 = 124,
    generador12 = 124,
    generador13 = 124,
    generador14 = 124,
    generador15 = 124,
    generador16 = 124,
    generador17 = 124,
    generador18 = 124,
    generador19 = 124]


// bucle con WHILE
var totalMW = 0;
var i = 0;
while (i < 4) {
    totalMW = totalMW + generadores[i];
    console.log('Generador #' + (i + 1) + ' está prendido, añadiendo ' + generadores[i] + ' MW para un total de: ' + totalMW + ' MW.');
    i++;
}

//Bucle con FOR
j = 4;
for (j; j < generadores.length; j++) {
    totalMW = totalMW + generadores[j];
    console.log('Generador #' + (j + 1) + ' está prendido, añadiendo ' + generadores[j] + ' MW para un total de: ' + totalMW + ' MW.');
}


//// Funcionalidad Adicional
console.log('');
console.log('///////////////////////');
console.log('Funcionalidad Adicional');
console.log('///////////////////////');
totalMW = 0;

// bucle con WHILE
var totalMW = 0;
var i = 0;
while (i < 4) {

    if ((i + 1) % 2 == 0) {
        console.log('Generador #' + (i + 1) + ' está Apagado');
    }
    else {
        totalMW = totalMW + generadores[i];
        console.log('Generador #' + (i + 1) + ' está prendido, añadiendo ' + generadores[i] + ' MW para un total de: ' + totalMW + ' MW.');
    }
    i++;
}

//Bucle con FOR
j = 4;
for (j; j < generadores.length; j++) {
    if ((j + 1) % 2 === 0) {
        console.log('Generador #' + (j + 1) + ' está Apagado');
    }
    else {
        totalMW = totalMW + generadores[j];
        console.log('Generador #' + (j + 1) + ' está prendido, añadiendo ' + generadores[j] + ' MW para un total de: ' + totalMW + ' MW.');
    }
}