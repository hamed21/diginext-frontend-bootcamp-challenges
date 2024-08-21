/**
 * This method can get infinity numbers as args and can call for infinity time.
 * The result of the last call should be parsable as both number or string.
 * Use case: No use case. Just sth fun :)))))
 */
function add(...args) {
    let result = args.reduce((acc, curr) => acc + curr, 0);

    function innerAdd (...nextArgs) {
        result += nextArgs.reduce((acc,curr)=> acc+curr,0)
        return innerAdd
    }
    innerAdd.valueOf = () => result;;


    return innerAdd
}

