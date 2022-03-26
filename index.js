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


// Ax=b
const gausSimple = require('./Matrixes/gausSimple')
const gausPivoteoParcial = require('./Matrixes/gausPivoteoParcial')
const gausPivoteoTotal = require('./Matrixes/gausPivoteoTotal')



//Main

//console.table(busquedasInc('e^(3*x-12)+x*cos(3x)-x^2+1',-10,1,10).iterations)
//console.table(biseccion('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100).iterations)
//console.table(reglaFalsa('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100).iterations)
//console.table(puntoFijo('log((sin(x)^2)+1)-x-1/2','log((sin(x)^2)+1)-1/2',-0.5,10e-7,100).iterations)

