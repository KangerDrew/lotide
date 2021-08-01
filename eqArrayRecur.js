const eqArraysRecur = function(ar1, ar2) {

    if (ar1.length !== ar2.length) return false;

    for (let i = 0; i < ar1.length; i++) {
        
        if (typeof ar1[i] !== typeof ar2[i]) return false;

        if (!Array.isArray(ar1[i]) && ar1[i] !== ar2[i]) return false;

        if (Array.isArray(ar1[i]) && !eqArraysRecur(ar1[i], ar2[i])) return false;
        
    }

    return true;

}



console.log(eqArraysRecur([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArraysRecur([[2, 3], [4], 5, [2, 4, 3], 6], [[2, 3], [4], 5, [2, 4, 3], 6])) // => true

console.log(eqArraysRecur([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArraysRecur([[2, 3], [4]], [[2, 3], 4])) // => false
