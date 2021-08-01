
const eqObjectsRecur = function(obj1, obj2) {

    for (const keyVal in obj1) {
        
        if (typeof obj1[keyVal] !== typeof obj2[keyVal]) return false;

        if (typeof obj1[keyVal] !== 'object' && obj1[keyVal] !== obj2[keyVal]) return false;

        if (typeof obj1[keyVal] === 'object' && !eqObjectsRecur(obj1[keyVal],obj2[keyVal])) return false;

    }

    for (const keyVal in obj2) {
        
        if (typeof obj1[keyVal] !== typeof obj2[keyVal]) return false;

        if (typeof obj2[keyVal] !== 'object' && obj1[keyVal] !== obj2[keyVal]) return false;

        if (typeof obj2[keyVal] === 'object' && !eqObjectsRecur(obj1[keyVal],obj2[keyVal])) return false;

    }

    return true;
};





console.log(eqObjectsRecur({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjectsRecur({ a: { z: 1, k: 3}, b: 2, c: 3, d:{u: {x: 1, y: 15}} }, { a: { z: 1, k: 3}, b: 2, c: 3, d:{u: {x: 1, y: 15}} }))

// console.log(eqObjectsRecur({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjectsRecur({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjectsRecur({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2, c: 69 })) // => false