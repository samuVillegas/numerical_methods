const mathjs = require('mathjs')

module.exports = (f,x0,x1,tolerance,nMax) => {
    const iterations = []
    fx0 = mathjs.evaluate(f,{x:x0});
    fx1 = mathjs.evaluate(f,{x:x1});
    if (fx0 === 0) {
        return { state: 'Success', root: x0 }
    }else if (fx1 === 0) {
        return { state: 'Success', root: x1}
    }else{
        counter = 0;
        iterations.push({counter:counter++,xi:x0.toFixed(10),fxi:fx0.toExponential(1)})
        iterations.push({counter:counter,xi:x1.toFixed(10),fxi:fx1.toExponential(1)})
        error = tolerance + 1;
        det = fx1 - fx0;
        while(fx1 !== 0 && error > tolerance && counter < nMax && det !== 0){
            x1aux = x1;
            x1 = x1 - (fx1*(x1-x0))/(fx1-fx0);
            x0 = x1aux;
            fx0 = fx1;
            fx1 = mathjs.evaluate(f,{x:x1});
            error = Math.abs(x1-x0);
            counter++;
            iterations.push({counter,xi:x1.toFixed(10),fxi:fx1.toExponential(1),error: error.toExponential(1)})
        }

        if(fx1 === 0) return {state: 'Success', iterations, root: x1}
        if(error <= tolerance) return { state: 'Success', iterations, approximation: x1}
        if(det === 0) return {state: 'Error', iterations, message: `${x1} is a possible multiple root`}
        return { state: 'Error', iterations, message: 'The method fails with the maximum number of iterations given'}
    }
    
}