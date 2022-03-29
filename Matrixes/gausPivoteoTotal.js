const mathjs = require('mathjs')

const totalPivot = (m, n, k) => {
    major = -1;
    posRow = -1;
    posColumn = -1;
    for (let i = k; i < n; i++) {
        for (let j = k; j < n; j++) {
            if (Math.abs(m[i][j]) > major) {
                major = Math.abs(m[i][j]);
                posRow = i;
                posColumn = j;
            }
        }
    }
    const temp = m[k];
    m[k] = m[posRow];
    m[posRow] = temp;
    m = mathjs.transpose(m);
    const temp2 = m[k];
    m[k] = m[posColumn];
    m[posColumn] = temp2;

    m = mathjs.transpose(m);
    return {posColumn,matriz:m};
}



const upperTriangular = (A, b, n) => {
    const stages = [];
    const marks = new Array(n)
    m = mathjs.concat(A, b);
    for (let i = 0; i < n - 1; i++) {
        const {posColumn,matriz} = totalPivot(m, n, i);
        marks[i] = posColumn;
        m=[...matriz];
        if (m[i][i] === 0) return { state: 'Error', message: 'A 0 was found on the diagonal' };
        for (let j = i + 1; j < n; j++) {
            if (m[j][i] !== 0) {
                m[j] = mathjs.subtract(mathjs.row(m, j), mathjs.multiply(mathjs.row(m, i), m[j][i] / m[i][i]))[0];
            }
        }
        stages.push([...m])
    }
    return { m, stages, marks };
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
    const { m, stages, marks, state, message } = upperTriangular(A, b, n)
    if (state === 'Error') {
        return { state, message }
    }
    return { state: 'Success', stages, x: sustitution(m, n), marks}
}
