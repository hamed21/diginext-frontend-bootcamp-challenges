/**
 * Returns a flatten object. Remember that the level of nesting is not specified.
 * Use case. Form creation for nested objects or lists.
 *
 * @param {object} object An object that may be nested.
 *
 * @returns flatten object.
 *
 * @example flatten({"a": {"b": {"c": "d"}}}) => {"a.b.c": "d"}
 *
 */
function flatten(object) {
    let myObj ={...object}
    let key = []

    while (typeof myObj=== 'object'){
        key.push(Object.keys(myObj)[0])
        myObj = Object.values(myObj)[0]
    }
    key = key.join('.')

    return {[key]: myObj}
}

/**
 * Returns a nested object. Remember that the level of nesting is not specified.
 *
 * @param {object} object A flat object
 *
 * @returns maybe nested object
 *
 * @example revertFlatten({"a.b.c": "d"}) => {"a": {"b": {"c": "d"}}}
 *
 */
function revertFlatten(object) {
    const entries = Object.entries(object).flat()
    let result = entries[1]

    entries[0].split('.').reverse().forEach(item => {
        result = {[item]: result}
    })

    return result

}
