const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'a.html'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    rules:{
        
    }
}