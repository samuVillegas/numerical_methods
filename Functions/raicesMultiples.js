const mathjs = require('mathjs')
module.exports = (f,f1,f2,x0,tolerance,nMax) => {
    const iterations = [];
    xi = x0
    fxi = mathjs.evaluate(f,{x:xi});
    if(fxi === 0) {
        return { state: 'Success', root: xi }
    }else {
        counter = 0;
        f1xi = mathjs.evaluate(f1,{x:xi});
        f2xi = mathjs.evaluate(f2,{x:xi});
        error = tolerance + 1;
        det = (Math.pow(f1xi,2))-(fxi*f2xi);
        iterations.push({counter,xi,fxi,f1xi,f2xi});
        while(fxi !== 0 && error > tolerance && counter < nMax && det !== 0){
            xiaux = xi;
            xi = xi - ((fxi*f1xi)/((Math.pow(f1xi,2))-(fxi*f2xi)));
            fxi = mathjs.evaluate(f,{x:xi});
            f1xi = mathjs.evaluate(f1,{x:xi});
            f2xi = mathjs.evaluate(f2,{x:xi});
            error = Math.abs(xi-xiaux);
            det = (Math.pow(f1xi,2))-(fxi*f2xi);
            counter++;
            iterations.push({counter,xi,fxi,f1xi,f2xi,error});
        }

        if(fxi === 0) return {state: 'Success', iterations, root: xi}
        if(error <= tolerance) return { state: 'Success', iterations, approximation: xi}
        if(det === 0) return {state: 'Error', iterations, message: `Error during method execution`}
        return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given'}
    }
}