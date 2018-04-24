var mes = 0;
var ososInicial = 4;


function numOsos(meses) {

    var totalOsosAlFinaldelNumeroDelMes = ososInicial
    for (var i = 0; i < meses; i++) {
        totalOsosAlFinaldelNumeroDelMes = totalOsosAlFinaldelNumeroDelMes * 4
    }
    return 'Van a existir '+ totalOsosAlFinaldelNumeroDelMes+' despues de ' + meses + ' mes(es).' ;
}

console.log(numOsos(5))
