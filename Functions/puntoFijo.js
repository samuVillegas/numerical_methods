const mathjs = require('mathjs')

module.exports = (fx,gx,x0,tolerance,nMax) => {
    const iterations = []
    fxi = mathjs.evaluate(fx,{x:x0});
    if (fxi === 0) {
        return { state: 'Success', root: x0 }
    }else {
        counter = 0;
        xi = x0
        iterations.push({counter,xi,fxi});
        error = tolerance + 1;
        while(fxi !== 0 && error > tolerance && counter < nMax){
            xaux = xi;
            xi = mathjs.evaluate(gx,{x:xaux});
            fx = mathjs.evaluate(fx,{x:xi});
            error = Math.abs(xi-xaux);
            counter++;
            iterations.push({counter,xi,fxi,error});
        }
        if(fxi === 0) return {state: 'Success', iterations, root: xi}
        if(error <= tolerance) return { state: 'Success', iterations, approximation: xi}
        return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given'}
    }

}