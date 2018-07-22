const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};