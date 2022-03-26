const mathjs = require('mathjs')

module.exports = (f,f1,x0,tolerance,nMax) => {
    const iterations = []
    fxi = mathjs.evaluate(f,{x:x0});
    if (fxi === 0) {
        return { state: 'Success', root: x0 }
    }else{
        counter = 0;
        
    }
}