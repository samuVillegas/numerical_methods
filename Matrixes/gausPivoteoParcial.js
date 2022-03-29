const mathjs = require('mathjs')

const partialPivot = (m,n,k) => {
    const list = mathjs.column(m,k);
    major = -1;
    pos = -1;
    for(let i = k;i<n;i++){
        if (Math.abs(list[i])> major){
            major = Math.abs(list[i]);
            pos = i;
        }
    }
    const temp = m[k];
    m[k] = m[pos];
    m[pos] = temp;
}



const upperTriangular = (A, b, n) => {
    const stages = [];
    m = mathjs.concat(A, b);
    for (let i = 0; i < n - 1; i++) {
        partialPivot(m,n,i)
        if (m[i][i] === 0) return { state: 'Error', message: 'A 0 was found on the diagonal' };
        for (let j = i + 1; j < n; j++) {
            if (m[j][i] !== 0) {
                m[j] = mathjs.subtract(mathjs.row(m, j), mathjs.multiply(mathjs.row(m, i), m[j][i] / m[i][i]))[0];
            }
        }
        stages.push([...m])
    }
    return { m, stages };
}

const sustitution = (m, n) => {
    const results = new Array(n);
    results[n - 1] = m[n - 1][n] / m[n - 1][n - 1]

    for (let i = n - 2; i > -1; i--) {
        let summation = 0;
        for (let j = i + 1; j < n; j++) {
            summation += m[i][j] * results[j]
        }
        results[i] = (m[i][n] - summation) / m[i][i]
    }
    return results;
}

module.exports = (A, b, n) => {
    const { m, stages, state, message } = upperTriangular(A, b, n)
    if (state === 'Error') {
        return { state, message }
    }
    return { state: 'Success', stages, x: sustitution(m, n)}
}
