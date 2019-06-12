module.exports = {
    entry: __dirname + '/lib/templates.js',

    output: {
        path: __dirname + '/dist/',
        filename: 'templates.js',
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                include: __dirname + '/src',
            },
        ]
    }
};
