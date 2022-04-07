const mathjs = require('mathjs')

module.exports = (f,f1,x0,tolerance,nMax) => {
    const iterations = []
    xi = x0
    fxi = mathjs.evaluate(f,{x:x0});
    if (fxi === 0) {
        return { state: 'Success', root: x0 }
    }else{
        counter = 0;
        f1xi = mathjs.evaluate(f1,{x:x0});
        iterations.push({iter:counter,xi:xi.toFixed(10),fxi:fxi.toExponential(1)});
        error = tolerance + 1;

        while(fxi !== 0 && error>tolerance && counter < nMax && f1xi !== 0){
            xiaux = xi;
            xi = xi - (fxi/f1xi);
            fxi = mathjs.evaluate(f,{x:xi});
            f1xi = mathjs.evaluate(f1,{x:xi});
            error = Math.abs(xi-xiaux);
            counter++;
            iterations.push({iter:counter,xi:xi.toFixed(10),fxi:fxi.toExponential(1),error:error.toExponential(1)});
        }

        if(fxi === 0) return {state: 'Success', iterations, root: xi}
        if(error <= tolerance) return { state: 'Success', iterations, approximation: xi}
        if(f1x1 === 0) return {state: 'Error', iterations, message: `${xi} is a possible multiple root`}
        return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given'}
    }
}