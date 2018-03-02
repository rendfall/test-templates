module.exports = {
    entry: __dirname + '/lib/templates.js',

    output: {
        path: __dirname + '/dist/',
        filename: 'templates.js',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
