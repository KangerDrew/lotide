# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kangerdrew/lotide`

**Require it:**

`const _ = require('@kangerdrew/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array.

* `tail(array)`: Returns every element of the array except for the first element.

* `middle(array)`: Returns the middle element of the array (within an array). If the length of an array is even, it will return two middle elements instead.

* `countLetters(string)`: Returns the number of letters in the string input.

* `countOnly(allItems, itemsToCount)`: Returns how many times a item specified in "itemsToCount" object input, is included in the allItems array input. Check the example commented out in the main script...

* `eqArrays(ar1, ar2)`: Returns either true or false depending on whether the two arrays are equal or not.

* `eqObjects(object1, object2)`: Returns either true or false depending on whether the two objects are equal or not.

* `findKey(object, callback)`: Through the callback input, the function returns the key of an input object with a specified nested key value. See findKey.js script for commented out example...

* `findKeyByValue(obj, inputKeyval)`: Returns a key from the input obj, by finding the one with a corresponding inputKeyval.

* `flatten(array)`: Takes an array containing elements including nested arrays of elements, and return a "flattened" version of the array. Only works for one level of nesting.

* `letterPositions(sentence)`: Takes a string input, and returns an object with keys that are the letters in the input string. The key values is an array of the index location of each letter.

* `map(array, callback)`: Will return a new array based on the results of the callback function.

* `takeUntil(array, callback)`: Will return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value. 

* `without(array, remove)`: Will return a a new array, except the elements specified in "remove" input array will be removed. 