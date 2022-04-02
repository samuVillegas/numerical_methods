const mathjs = require('mathjs')
module.exports = (f, x0, x1, tolerance, nMax) => {
    iterations = []
    //Utilizamos método de regla falsa para hallar x2
    fx0 = mathjs.evaluate(f, { x: x0 })
    fx1 = mathjs.evaluate(f, { x: x1 })
    x2 = (x0+x1)/2;
    fx2 = mathjs.evaluate(f, { x: x2 })
    //Hallamos aproximaciones que nos da el método de muller    
    h0 = x1 - x0
    h1 = x2 - x1
    delta0 = (fx1 - fx0) / h0;
    delta1 = (fx2 - fx1) / h1;

    //Coeficientes parábola
    a = (delta1 - delta0) / (h1 - h0)
    b = a * (h1) + delta1
    c = fx2

    //Tercera aproximacion
    xi = x2 + (-2 * c) / (b + (b / Math.abs(b)) * Math.sqrt(Math.pow(b, 2) - 4 * a * c))
    fxi = mathjs.evaluate(f, { x: xi })
    error = tolerance + 1;
    counter = 0;
    iterations.push({counter, x0, x1, x2, xi, fxi});

    while(fxi !== 0 && error > tolerance && counter < nMax){
        x2aux = x2;
        x1aux = x1;
        x2 = xi;
        x1 = x2aux;
        x0 = x1aux;
        fx0 = mathjs.evaluate(f, { x: x0 });
        fx1 = mathjs.evaluate(f, { x: x1 });
        fx2 = mathjs.evaluate(f, { x: x2 });
        h0 = x1 - x0
        h1 = x2 - x1
        delta0 = (fx1 - fx0) / h0;
        delta1 = (fx2 - fx1) / h1;
        a = (delta1 - delta0) / (h1 - h0)
        b = a * (h1) + delta1
        c = fx2
        xi = x2 + (-2 * c) / (b + (b / Math.abs(b)) * Math.sqrt(Math.pow(b, 2) - 4 * a * c))
        fxi = mathjs.evaluate(f, { x: xi })
        error = Math.abs(xi-x2);
        counter++;
        iterations.push({counter, x0, x1, x2, xi, fxi, error});
    }

    if (fxi === 0) return { state: 'Success', iterations, root: xi }
    if (error <= tolerance) return { state: 'Success', iterations, approximation: xi }
    return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given' }

}