const mathjs = require('mathjs')

const upperTriangular = (A, b, n) => {
    m = mathjs.concat(A, b);
    for (let i = 0; i < n - 1; i++) {
        if (m[i][i] === 0) break;
        for (let j = i + 1; j < n; j++) {
            if (m[j][i] !== 0) {
                m[j] = mathjs.subtract(mathjs.row(m, j), mathjs.multiply(mathjs.row(m, i), m[j][i] / m[i][i]))[0];
            }
        }
    }
    return m;
}

const sustitution = () => {
    
}

module.exports = (A, b, n) => {
    return upperTriangular(A,b,n);
}

