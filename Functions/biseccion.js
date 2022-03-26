const mathjs = require('mathjs')

module.exports = (fx, xa, xb, tolerance, nMax) => {
    fa = mathjs.evaluate(fx, { x: xa });
    fb = mathjs.evaluate(fx, { x: xb });
    const iterations = [];
    if (fa === 0) {
        return {
            state: 'Success',
            root: xa
        }
    } else if (fb === 0) {
        return {
            state: 'Success',
            root: xb
        }
    } else if (fa * fb < 0) {
        xc = (xa + xb) / 2;
        fc = mathjs.evaluate(fx, { x: xc })
        counter = 0;
        iterations.push({ counter, xa, xb, xc, fa, fb, fc });
        error = tolerance + 10;
        while (error > tolerance && (fc !== 0) && (counter < nMax)) {
            xa = fa * fc < 0 ? xa : xc;
            xb = fa * fc < 0 ? xc : xb;
            fa = mathjs.evaluate(fx,{x:xa});
            fb = mathjs.evaluate(fx,{x:xb});
            xaux = xc;
            xc = (xa+xb)/2;
            fc = mathjs.evaluate(fx,{x:xc});
            error = Math.abs(xc-xaux);
            iterations.push({ counter, xa, xb, xc, fa, fb, fc, error});
            counter++;
        }

        if(fc === 0) return { state: 'Success', iterations, root: xc }
        if(error <= tolerance) return { state: 'Success', iterations, approximation: xc}

        return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given'}
        
    }
}