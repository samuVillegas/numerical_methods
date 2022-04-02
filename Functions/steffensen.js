const mathjs = require('mathjs')

module.exports = (f, g, x0, tolerance, nMax) => {
    const iterations = [];

    x1 = mathjs.evaluate(g, { x: x0 });
    x2 = mathjs.evaluate(g, { x: x1 });
    xi = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
    fxi = mathjs.evaluate(f, { x: xi });
    error = tolerance + 1;
    counter = 0;
    iterations.push({ counter, x0, x1, x2, xi, fxi })
    while (fxi !== 0 && error > tolerance && counter < nMax) {
        x0 = xi
        x1 = mathjs.evaluate(g, { x: x0 });
        x2 = mathjs.evaluate(g, { x: x1 });
        xiAux = xi;
        xi = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
        fxi = mathjs.evaluate(f, { x: xi });
        error = Math.abs(xi - xiAux);
        counter++;
        iterations.push({ counter, x0, x1, x2, xi, fxi, error });
    }

    if (fxi === 0) return { state: 'Success', iterations, root: xi }
    if (error <= tolerance) return { state: 'Success', iterations, approximation: xi }
    return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given' }
}