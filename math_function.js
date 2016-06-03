/**
 * Created by pallali on 2/6/16.
 */


var add = createMathOperation(function(augend, addend) {
    //console.log("add function");
    return augend + addend;
});


//console.log(add.toString())

function createMathOperation(operator) {
    //console.log("Math Function");

    return function(value,other) {
      //  console.log(arguments)
        //console.log("return function ");
        var result;
        if (value === undefined && other === undefined) {
            return 0;
        }
        if (value !== undefined) {
            result = value;
        }
        if (other !== undefined) {
            if (result === undefined) {
                return other;
            }
            if (typeof value == 'string' || typeof other == 'string') {
                value = baseToString(value);
                other = baseToString(other);
            } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
            }
            result = operator(value, other);
        }
        return result;
    };
}


var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}


//var Symbol = root.Symbol;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(typeof global == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(typeof self == 'object' && self);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(typeof this == 'object' && this);

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();


function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
}



var NAN = 0 / 0;

/**
 * The base implementation of `_.toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function baseToNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    return +value;
}

function isSymbol(value) {
    return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
}
function isObjectLike(value) {
    return !!value && typeof value == 'object';
}

//var objectToString = objectProto.toString;

//console.log(add("5",6))



module.exports.add = add;


function compact(array) {

    var index = -1,
        length = array ? array.length : 0,
        resIndex = 0,
        result = [];

    while (++index < length) {


        var value = array[index];



        if (value) {

            result[resIndex++] = value;


        }
    }
    console.log("result:"+result);

    return result;

}

module.exports.compact=compact;

//math_function.add = add;

//math_function.compact=compact;



/*
// Export lodash.
var _ = runInContext();

// Expose Lodash on the free variable `window` or `self` when available so it's
// globally accessible, even when bundled with Browserify, Webpack, etc. This
// also prevents errors in cases where Lodash is loaded by a script tag in the
// presence of an AMD loader. See http://requirejs.org/docs/errors.html#mismatch
// for more details. Use `_.noConflict` to remove Lodash from the global object.
(freeSelf || {})._ = _;

// Some AMD build optimizers like r.js check for condition patterns like the following:
if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function() {
        return _;
    });
}
// Check for `exports` after `define` in case a build optimizer adds an `exports` object.
else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
}
else {
    // Export to the global object.
    root._ = _;
}
//}.call(this));
*/
