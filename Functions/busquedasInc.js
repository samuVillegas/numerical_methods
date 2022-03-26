const mathjs = require('mathjs')

module.exports = (fx, x0, deltax, nMax) => {
    const iterations = []
    let counter = 0;
    let xPrev = x0;
    let xCurrent = xPrev + deltax;
    let fPrev = mathjs.evaluate(fx, { x: xPrev })
    let fCurrent = mathjs.evaluate(fx, { x: xCurrent })
    iterations.push({ counter, xPrev, xCurrent, fPrev, fCurrent })

    while ((fPrev * fCurrent >= 0) && counter < nMax) {
        xPrev = xCurrent;
        xCurrent = xPrev + deltax;
        fPrev = mathjs.evaluate(fx, { x: xPrev })
        fCurrent = mathjs.evaluate(fx, { x: xCurrent })
        counter++;
        iterations.push({ counter, xPrev, xCurrent, fPrev, fCurrent })
    }

    return (fPrev * fCurrent) < 0 ? {
        state: 'Success',
        iterations,
        range: { a: xPrev, b: xCurrent }
    } : {
        state: 'Error',
        iterations,
        message: 'The method failed to find the interval'
    }
}