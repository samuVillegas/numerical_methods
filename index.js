/*
Documentation: https://mathjs.org/docs/reference/functions.html
*/


// F(x) = 0
const busquedasInc = require('./Functions/busquedasInc')
const biseccion = require('./Functions/biseccion')
const reglaFalsa = require('./Functions/reglaFalsa')
const puntoFijo = require('./Functions/puntoFijo')
const newton = require('./Functions/newton')
const secante = require('./Functions/secante')
const raicesMultiples = require('./Functions/raicesMultiples')
const steffensen = require('./Functions/steffensen')


// Ax=b
const gausSimple = require('./Matrixes/gausSimple')
const gausPivoteoParcial = require('./Matrixes/gausPivoteoParcial')
const gausPivoteoTotal = require('./Matrixes/gausPivoteoTotal')



//Main

// console.table(busquedasInc('e^(3*x-12)+x*cos(3x)-x^2+1',-10,1,10).iterations)
// console.table(biseccion('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100).iterations)
// console.table(reglaFalsa('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100).iterations)
// console.table(puntoFijo('log((sin(x)^2)+1)-x-1/2','log((sin(x)^2)+1)-1/2',-0.5,10e-7,100).iterations)
// console.table(newton('log((sin(x)^2)+ 1)-1/2','2/(((sin(x)^2)+1))*sin(x)*cos(x)',0.5,10e-7,100).iterations)
// console.table(secante('log((sin(x)^2)+ 1)-1/2',0.5,1,10e-7,100).iterations)
// console.table(raicesMultiples('e^x-x-1','e^x-1','e^x',1,10e-7,100).iterations)
console.table(steffensen('x^3 + 4x^2 -10','sqrt(10/(x+4))',1.5,10e-7,100).iterations)


//console.log(gausSimple([[14,6,-2,3],[3,15,2,-5],[-7,4,-23,2],[1,-3,-2,16]],[[12],[32],[-24],[14]],4).x)
//console.log(gausPivoteoParcial([[-7,2,-3,4],[5,-1,14,-1],[1,9,-7,5],[-12,13,-8,-4]],[[-12],[13],[31],[-32]],4).x)
//console.log(gausPivoteoTotal([[-7,2,-3,4],[5,-1,14,-1],[1,9,-7,13],[-12,13,-8,-4]],[[-12],[13],[31],[-32]],4).x)
