const mathjs = require('mathjs')

module.exports = (f, g, x0, tolerance, nMax) => {
    const iterations = [];

    x1 = mathjs.evaluate(g, { x: x0 });
    x2 = mathjs.evaluate(g, { x: x1 });
    x3 = mathjs.evaluate(g, { x: x2 });
    xi = x1 - (Math.pow(x2 - x1, 2)) / (x3 - 2 * x2 + x1);
    fxi = mathjs.evaluate(f, { x: xi })
    error = tolerance + 1;
    counter = 0;
    iterations.push({ counter, x1, x2, x3, xi, fxi })
    while (fxi !== 0 && error > tolerance && counter < nMax) {
        xtemp1 = x3
        x3 = xi
        xtemp2 = x2
        x2 = xtemp1
        x1 = xtemp2
        xi = x1 - (Math.pow(x2 - x1, 2)) / (x3 - 2 * x2 + x1)
        error = Math.abs(xi-x3);
        counter++;
        iterations.push({ counter, x1, x2, x3, xi, fxi, error })
    }
    if (fxi === 0) return { state: 'Success', iterations, root: xi }
    if (error <= tolerance) return { state: 'Success', iterations, approximation: xi }
    return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given' }
}