const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'scripts', 'index.js')
    },

    // "./src/script/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: ''
    }
}