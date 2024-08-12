/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */
function deepClone(arg) {
    if (arg === null || typeof arg !== 'object') {
        return arg;
    }

    let copy = Array.isArray(arg) ? [] : {};

    for (let key in arg) {
        if (arg.hasOwnProperty(key)) {
            copy[key] = deepClone(arg[key]);
        }
    }

    return copy;
}
