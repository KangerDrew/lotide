const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["Oh", "Yeah", "Mr. Krabs"], ["Oh", "Yeah", "Mr. Krabs"]), true);
assertEqual(eqArrays(["Doge", "2", "Moon"], ["Doge", 2, "Moon"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);