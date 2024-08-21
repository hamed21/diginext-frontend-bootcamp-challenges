/**
 * Level 1
 *
 * @param {function} callback the callback method that will be called if conditions happen
 * @param {number} n the number of callback calls that is permitted in the p period
 * @param {number} p the period of time that we should apply the n count on.
 *
 * @returns {function}
 */
function throttle(callback, n, p) {
    let callCount = 0
    let firstCallTime = null

    return function (...args){
        const now = Date.now()

        if (firstCallTime === null){
            firstCallTime = now
        }

        if (now -firstCallTime < p){
            if (callCount < n){
                callCount++
                callback(...args)
            }
        }else {
            firstCallTime= now
            callCount=1
            callback(...args)
        }
    }
}
/**
 * Level 2
 *
 * This method will call the callback only n times in the given period.
 * The difference between this and the throttle method is that if the violations of the restriction is repetitive,
 * the n should increase exponentially.
 *
 * @param {function} callback the callback method that will be called if conditions happen.
 * @param {number} n the number of callback calls that is permitted in the p period.
 * @param {number} p the period of time that we should apply the n count on.
 * @param {number} blockTime the period of time that we should block the function from getting called.
 * @param {number} exponent the exponent value that will apply on blockTime on repetitive throttle violation.
 *
 *
 * @returns {function}
 */
function advancedThrottle(callback, n, p, blockTime, exponent) {
  // TODO: Implement here
}


