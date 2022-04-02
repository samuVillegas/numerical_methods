/*
Documentation: https://mathjs.org/docs/reference/functions.html
*/
const mathjs = require('mathjs')

// F(x) = 0
const busquedasInc = require('./Functions/busquedasInc')
const biseccion = require('./Functions/biseccion')
const reglaFalsa = require('./Functions/reglaFalsa')
const puntoFijo = require('./Functions/puntoFijo')
const newton = require('./Functions/newton')
const secante = require('./Functions/secante')
const raicesMultiples = require('./Functions/raicesMultiples')
const steffensen = require('./Functions/steffensen')
const aitken = require('./Functions/aitken')
const muller = require('./Functions/muller')

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
// console.table(steffensen('x^3 + 4x^2 -10','sqrt(10/(x+4))',1.5,10e-7,100).iterations)
console.table(puntoFijo('x-e^(-x)','e^(-x)',0,10e-7,100).iterations)
console.table(aitken('x-e^(-x)','e^(-x)',0,10e-7,100).iterations)
console.table(muller('x-e^(-x)',0,1,10e-7,100).iterations)


//console.log(gausSimple([[0.6557, 0.6787, 0.6555, 0.2769],[0.0357, 0.7577, 0.1712, 0.0462],[0.8491, 0.7431, 0.7060, 0.0971],[0.9340, 0.3922, 0.0318, 0.8235]],[[0.4387],[0.3816],[0.7655],[0.7952]],4).x)
//console.log(gausPivoteoParcial([[0, 0.6787, 0.6555, 0.2769],[0, 0.7577, 0.1712, 0.0462],[0.8491, 0.7431, 0.7060, 0.0971],[0.9340, 0.3922, 0.0318, 0.8235]],[[0.4387],[0.3816],[0.7655],[0.7952]],4).x)
//console.log(gausPivoteoTotal([[-7,2,-3,4],[5,-1,14,-1],[1,9,-7,13],[-12,13,-8,-4]],[[-12],[13],[31],[-32]],4).x)


// console.log('..........Quiz1......................')

// A = [[0,2,3],[7,-1,20],[1,-14,8]];
// B = [[1,-4,9],[7,5,0],[1,8,120]];
// b = [[1],[1],[1]];
// c = [[-1],[0],[1]];
// d = [[4],[-2],[8]];

// console.log('..........Punto 1......................')
// console.table(mathjs.subtract(mathjs.multiply(A,mathjs.transpose(B)),mathjs.multiply(2,A)))
// console.log(mathjs.det(A))
// console.log('..........Punto 2......................')
// res1 = gausSimple(A,b,3);
// if(res1.state !== 'Error'){
//     console.table(res1.iterations)
//     console.table(res1.x)
// }else {
//     console.log(res1.message)
// }
// console.log('..........Punto 3......................')
// res2 = gausPivoteoParcial(A,c,3);
// if(res2.state !== 'Error'){
//     res2.stages.map(element => console.table(element))
//     console.table(res2.x)
// }else {
//     console.log(res2.message)
// }
// console.log('..........Punto 4......................')
// res3 = gausPivoteoTotal(A,d,3);
// if(res3.state !== 'Error'){
//     res3.stages.map(element => console.table(element))
//     console.table(res3.x)
// }else {
//     console.log(res3.message)
// }

// console.log('..........Quiz 2......................')


// C = [[10,20,-1,8],[1,1,2,0],[17,-14,8,20],[1,4,2,0]];
// e = [[1],[1],[1],[1]];

// console.log('..........Punto 1......................')
// res4 = gausSimple(C,e,4);
// if(res4.state !== 'Error'){
//     res4.stages.map(element => console.table(element))
//     console.table(res4.x)
// }else {
//     console.log(res4.message)
// }

// console.log('..........Punto 2......................')
// res5 = gausPivoteoParcial(C,e,4);
// if(res5.state !== 'Error'){
//     res5.stages.map(element => console.table(element))
//     console.table(res5.x)
// }else {
//     console.log(res5.message)
// }

// console.log('..........Punto 3......................')
// res6 = gausPivoteoTotal(C,e,4);
// if(res6.state !== 'Error'){
//     res6.stages.map(element => console.table(element))
//     console.table(res6.x)
// }else {
//     console.log(res6.message)
// }


// console.log('..................Quiz real..........')

// A = [[10,20,-60.8319,8],[1,1,-2.1416,0],[17,-14,40.9823,20],[1,4,-12.5664,1]];
// b = [[1],[1],[1],[1]];

// console.log('..................Punto 1..........')
// res1 = gausSimple(A,b,4);
// if(res1.state !== 'Error'){
//     res1.stages.map(element => console.table(element))
//     console.table(res1.x)
// }else {
//     console.log(res1.message)
// }

// console.log('..................Punto 2..........')
// res2 = gausPivoteoParcial(A,b,4);
// if(res2.state !== 'Error'){
//     res2.stages.map(element => console.table(element))
//     console.table(res2.x)
// }else {
//     console.log(res2.message)
// }

// console.log('..................Punto 3..........')
// res3 = gausPivoteoTotal(A,b,4);
// if(res3.state !== 'Error'){
//     res3.stages.map(element => console.table(element))
//     console.table(res3.x)
// }else {
//     console.log(res3.message)
// }
