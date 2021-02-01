var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});// .appendFile() adds content to a defined file
   // if file does not exsist it will be created