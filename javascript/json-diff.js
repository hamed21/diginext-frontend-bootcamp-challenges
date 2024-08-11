/**
 *
 * This function will get 2 objects and returns the changes in the format provided at the end of the file.
 * Use case: Git file diff
 *
 * @param {object} oldObject
 * @param {object} newObject
 *
 * @returns diff object.
 */
function jsonDiff(oldObject, newObject) {
    let type

    let result = {}
    for (let key in oldObject) {
        if (newObject[key]===undefined){
            type = 'removed'
            result[key] = {type , oldValue: oldObject[key]}
            delete newObject[key]
        }else if (newObject[key]!==undefined&&(newObject[key] !== oldObject[key])){
            type = 'modified'
            result[key] = {type , oldValue: oldObject[key], newValue: newObject[key]}
            delete newObject[key]
        }else if (newObject[key]&&(newObject[key] === oldObject[key])){
            delete newObject[key]
        }
    }

    for (let key in newObject){
        result[key] = {type:'added', newValue: newObject[key]}
    }



    return result
}


// {
//     "key1": {
//         "type": "modified",
//         "oldValue": "old value",
//         "newValue": "new value"
//     },
//     "key 2": {
//         "type": "added",
//         "newValue": "new value"
//     },
//     "key 3": {
//         "type": "removed",
//         "oldValue": "old value"
//     },
//     ...
// }
