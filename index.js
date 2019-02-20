/* 
    startTime = milliseconds --> number
    endTime = milliseconds --> number
    onlyHigherValue --> Boolean
*/
module.exports = function timeDiffString(startTime, endTime, onlyHigherValue) {
    function getTimeString() {

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
            /* old code */
            /* no longer valid */
            // if (totalTimeDiff / (365 * 24 * 60 * 60 * 1000) >= 1) {
            //     timeString += Math.floor(totalTimeDiff / (365 * 24 * 60 * 60 * 1000)) + 'y'
            // } else if (totalTimeDiff / (30 * 24 * 60 * 60 * 1000) >= 1) {
            //     timeString += Math.floor(totalTimeDiff / (30 * 24 * 60 * 60 * 1000)) + 'mo'
            // } else if (totalTimeDiff / (1 * 24 * 60 * 60 * 1000) >= 1) {
            //     timeString += Math.floor(totalTimeDiff / (1 * 24 * 60 * 60 * 1000)) + 'd'
            // } else if (totalTimeDiff / (1 * 60 * 60 * 1000) >= 1) {
            //     timeString += Math.floor(totalTimeDiff / (1 * 60 * 60 * 1000)) + 'h'
            // } else if (totalTimeDiff / (1 * 60 * 1000) >= 1) {
            //     timeString += Math.floor(totalTimeDiff / (1 * 60 * 1000)) + 'm'
            // } else if (totalTimeDiff / (60 * 1000) >= 1) {
            //     timeString += Math.floor(totalTimeDiff / (60 * 1000)) + 's'
            // } else {
            //     timeString += '0s'
            // }

            /* getting time string */
            timeString = getTimeStringNew()
        }

        return timeString
    }

    /* get time difference  */
    function getTimeStringNew() {
        let newStartDate = new Date(startTime)
        let newEndDate = new Date(endTime)

        let timeString = ''

        /* checking same year condition */
        if (newStartDate.getFullYear() === newEndDate.getFullYear()) {
            /* checking same month */
            if (newStartDate.getMonth() === newEndDate.getMonth()) {
                /* checking same day */
                if (newStartDate.getDate() === newEndDate.getDate()) {
                    /* checking same hours */
                    if (newStartDate.getHours() === newEndDate.getHours()) {
                        /* checking same minutes  */
                        if (newStartDate.getMinutes() === newEndDate.getMinutes()) {
                            /* checking same seconds */
                            if (newStartDate.getSeconds() === newEndDate.getSeconds()) {
                                timeString = '0s'
                            } else {/* seconds checking else */
                                if (newEndDate.getSeconds() - newStartDate.getSeconds() === 1 && newEndDate.getMilliseconds() < newStartDate.getMilliseconds()) {
                                    timeString = '0s'
                                } else {
                                    if (newEndDate.getMilliseconds() < newStartDate.getMilliseconds()) {
                                        timeString = '' + newEndDate.getSeconds() - newStartDate.getSeconds() - 1 + 's'
                                    } else {
                                        timeString = '' + newEndDate.getSeconds() - newStartDate.getSeconds() + 's'
                                    }
                                }
                            }
                        } else {/* mintues checking else */
                            /* checking next minute condition */
                            if (newEndDate.getMinutes() - newStartDate.getMinutes() === 1 && newEndDate.getSeconds() < newStartDate.getSeconds()) {
                                timeString = '' + 60 - (newStartDate.getSeconds() - newEndDate.getSeconds()) + 's'
                            } else {
                                if (newEndDate.getSeconds() < newStartDate.getSeconds()) {
                                    timeString = '' + newEndDate.getMinutes() - newStartDate.getMinutes() - 1 + 'm'
                                } else {
                                    timeString = '' + newEndDate.getMinutes() - newStartDate.getMinutes() + 'm'
                                }
                            }
                        }
                    } else {/* hours checking else */
                        /* checking next hour condition */
                        if (newEndDate.getHours() - newStartDate.getHours() === 1 && newEndDate.getMinutes() < newStartDate.getMinutes()) {
                            timeString = '' + 60 - (newStartDate.getMinutes() - newEndDate.getMinutes()) + 'm'
                        } else {
                            if (newEndDate.getMinutes() < newStartDate.getMinutes()) {
                                timeString = '' + newEndDate.getHours() - newStartDate.getHours() - 1 + 'h'
                            } else {
                                timeString = '' + newEndDate.getHours() - newStartDate.getHours() + 'h'
                            }
                        }
                    }
                } else {/* day checking else */
                    /* checking next day condition */
                    if (newEndDate.getDate() - newStartDate.getDate() === 1 && newEndDate.getHours() < newStartDate.getHours()) {
                        timeString = '' + 24 - (newStartDate.getHours() - newEndDate.getHours()) + 'h'
                    } else {
                        if (newEndDate.getHours() < newStartDate.getHours()) {
                            timeString = '' + newEndDate.getDate() - newStartDate.getDate() - 1 + 'd'
                        } else {
                            timeString = '' + newEndDate.getDate() - newStartDate.getDate() + 'd'
                        }
                    }
                }
            } else {/* months checking else */
                /* checking next month condition */
                if (newEndDate.getMonth() - newStartDate.getMonth() === 1 && newEndDate.getDate() < newStartDate.getDate()) {
                    timeString = '' + 30 - (newStartDate.getDate() - newEndDate.getDate()) + 'd'
                } else {
                    if (newEndDate.getDate() < newStartDate.getDate()) {
                        timeString = '' + newEndDate.getMonth() - newStartDate.getSeconds() - 1 + 'mo'
                    } else {
                        timeString = '' + newEndDate.getMonth() - newStartDate.getSeconds() + 'mo'
                    }
                }
            }
        } else {/* years checking else */
            if (newEndDate.getFullYear() - newStartDate.getFullYear() === 1 && newEndDate.getMonth() < newStartDate.getMonth()) {
                timeString = '' + newStartDate.getMonth() - newEndDate.getMonth() + 'mo'
            } else {
                if (newEndDate.getMonth() < newStartDate.getMonth()) {
                    timeString = '' + newEndDate.getFullYear() - newStartDate.getFullYear() - 1 + 'y'
                } else {
                    timeString = '' + newEndDate.getFullYear() - newStartDate.getFullYear() + 'y'
                }
            }
        }

        return timeString
    }

    /* calling main function */
    return getTimeString()
}