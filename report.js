const newman = require('newman');
 
newman.run({
    collection: require('./collection/collection.json'),
    //collection:'https://api.postman.com/collections/13503855-5066fa56-9f0a-4870-ad21-1f70ebf3ab84?access_key=PMAT-01GQP37W393DA1AG88XQ4HB6Z6',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});