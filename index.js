/* 
    startTime = milliseconds --> number
    endTime = milliseconds --> number
    onlyHigherValue --> Boolean
*/
module.exports = function timeDiffString(startTime, endTime, onlyHigherValue) {
    if (typeof startTime !== 'number' || typeof endTime !== 'number') {
        throw new TypeError('timeDiffString wants both start time and end time are numbers(milliseconds)')
    }

    if (endTime < startTime) {
        throw new TypeError('end time should be greater than or equal to start time')
    }

    /* adjusting default vaules */
    onlyHigherValue = onlyHigherValue ? onlyHigherValue : false

    /* getting difference */
    let totalTimeDiff = endTime - startTime

    let timeString = ''

    if (onlyHigherValue) {

    } else {
        if (totalTimeDiff / (365 * 24 * 60 * 60 * 1000) >= 1) {
            timeString += Math.floor(totalTimeDiff / (365 * 24 * 60 * 60 * 1000)) + 'y'
        } else if (totalTimeDiff / (30 * 24 * 60 * 60 * 1000) >= 1) {
            timeString += Math.floor(totalTimeDiff / (30 * 24 * 60 * 60 * 1000)) + 'mo'
        } else if (totalTimeDiff / (1 * 24 * 60 * 60 * 1000) >= 1) {
            timeString += Math.floor(totalTimeDiff / (1 * 24 * 60 * 60 * 1000)) + 'd'
        } else if (totalTimeDiff / (1 * 60 * 60 * 1000) >= 1) {
            timeString += Math.floor(totalTimeDiff / (1 * 60 * 60 * 1000)) + 'h'
        } else if (totalTimeDiff / (1 * 60 * 1000) >= 1) {
            timeString += Math.floor(totalTimeDiff / (1 * 60 * 1000)) + 'm'
        } else if (totalTimeDiff / (60 * 1000) >= 1) {
            timeString += Math.floor(totalTimeDiff / (60 * 1000)) + 's'
        } else {
            timeString += '0s'
        }
    }

    return timeString
}