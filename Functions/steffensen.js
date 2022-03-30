const mathjs = require('mathjs')

module.exports = (f, g, x0, tolerance, nMax) => {
    const iterations = [];

    x1 = mathjs.evaluate(g, { x: x0 });
    x2 = mathjs.evaluate(g, { x: x1 });
    x3 = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
    fx3 = mathjs.evaluate(f, { x: x3 });
    error = tolerance + 1;
    counter = 0;
    iterations.push({ counter, x0, x1, x2, x3, fx3 })
    while (fx3 !== 0 && error > tolerance && counter < nMax) {
        x0 = x3
        x1 = mathjs.evaluate(g, { x: x0 });
        x2 = mathjs.evaluate(g, { x: x1 });
        x3Aux = x3;
        x3 = x0 - (Math.pow(x1 - x0, 2)) / (x2 - 2 * x1 + x0);
        fx3 = mathjs.evaluate(f, { x: x3 });
        error = Math.abs(x3 - x3Aux);
        counter++;
        iterations.push({ counter, x0, x1, x2, x3, fx3, error });
    }

    if (fx3 === 0) return { state: 'Success', iterations, root: x3 }
    if (error <= tolerance) return { state: 'Success', iterations, approximation: x3 }
    return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given' }
}