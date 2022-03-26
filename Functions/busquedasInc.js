const mathjs = require('mathjs')

module.exports = (f, x0, deltax, nMax) => {
    const iterations = []
    counter = 0;
    xPrev = x0;
    xCurrent = xPrev + deltax;
    fPrev = mathjs.evaluate(f, { x: xPrev });
    fCurrent = mathjs.evaluate(f, { x: xCurrent });
    iterations.push({ counter, xPrev, xCurrent, fPrev, fCurrent });

    while ((fPrev * fCurrent >= 0) && counter < nMax) {
        xPrev = xCurrent;
        xCurrent = xPrev + deltax;
        fPrev = mathjs.evaluate(f, { x: xPrev });
        fCurrent = mathjs.evaluate(f, { x: xCurrent });
        counter++;
        iterations.push({ counter, xPrev, xCurrent, fPrev, fCurrent });
    }

    return (fPrev * fCurrent) < 0 ? {
        state: 'Success',
        iterations,
        range: { xa: xPrev, xb: xCurrent }
    } : {
        state: 'Error',
        iterations,
        message: 'The method failed to find the interval'
    };
}