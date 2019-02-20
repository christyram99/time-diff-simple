/* test case file */
const indexService = require('./index')

let exceptedValues = {
    test1: '1s',
    test2: '2s',
    test3: '59s',
    test4: '1m',
    test5: '59m',
    test6: '1h',
    test7: '59m',
}

let originalValues = {
    test1: indexService(1549372011100, 1549372013000, false),
    test2: indexService(1549372011100, 1549372013100, false),
    test3: indexService(1549372011100, 1549372070000, false),
    test4: indexService(1549372011100, 1549372072000, false),
    test5: indexService(1549372011100, 1549375559000, false),
    test6: indexService(1549372011100, 1549375611000, false),
    test7: indexService(1549372011100, 1549375610000, false)
}

/* checking test cases */
Object.keys(exceptedValues).forEach((key) => {
    if (originalValues[key] === exceptedValues[key]) {
        console.log('-->' + key + ' passed')
        console.log('\n')
    } else {
        console.log('-->' + key + ' failed.')
        console.log(key + ' answer.\nexcepted: ', exceptedValues[key], ' Original: ' + originalValues[key])
        console.log('\n')
    }
})