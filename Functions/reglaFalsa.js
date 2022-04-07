const mathjs = require('mathjs')

module.exports = (f, xa, xb, tolerance, nMax) => {
    fa = mathjs.evaluate(f, { x: xa });
    fb = mathjs.evaluate(f, { x: xb });
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
        xc = xa - ((fa*(xb-xa))/(fb-fa));
        fc = mathjs.evaluate(f, { x: xc })
        counter = 1;
        iterations.push({ iter: counter, a:xa.toFixed(10),xm: xc.toFixed(10), b:xb.toFixed(10), fxm:fc.toExponential(1)});
        error = tolerance + 10;
        while (error > tolerance && (fc !== 0) && (counter < nMax)) {
            xa = fa * fc < 0 ? xa : xc;
            xb = fa * fc < 0 ? xc : xb;
            fa = mathjs.evaluate(f,{x:xa});
            fb = mathjs.evaluate(f,{x:xb});
            xaux = xc;
            xc = xa - ((fa*(xb-xa))/(fb-fa));
            fc = mathjs.evaluate(f,{x:xc});
            error = Math.abs(xc-xaux);
            counter++;
            iterations.push({ iter: counter, a:xa.toFixed(10),xm: xc.toFixed(10), b:xb.toFixed(10), fxm:fc.toExponential(1), error: error.toExponential(1)});
        }

        if(fc === 0) return { state: 'Success', iterations, root: xc }
        if(error <= tolerance) return { state: 'Success', iterations, approximation: xc}

        return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given'}
        
    }
}